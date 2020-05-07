import React, { useContext, useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { getToken } from "./useLocalStorage";
import { useCookies } from "react-cookie";
import { verify as verifyJWT, JsonWebTokenError } from "jsonwebtoken";
import {
   LOGIN_START,
   LOGIN_SUCCESS,
   AUTH_ERROR,
} from "../../context/user/actions";
import UserContext from "../../context/user/context";

interface JwtPayload {
   subject: number;
   username: string;
}

const LOGIN_TOKEN_KEY = "JWT";
const PrivateRoute = ({ component: Component, ...otherProps }: any) => {
   const [isLoading, setIsLoading] = useState(true);
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const { userData, userDispatch } = useContext(UserContext);
   const [cookies, setCookie, removeCookie] = useCookies([LOGIN_TOKEN_KEY]);
   const localToken: string | null = getToken();

   const setupUserContext = (jwToken: string): boolean => {
      console.log("Setting UserContext...");
      userDispatch({ type: LOGIN_START, payload: null });

      try {
         //extract user id from the token and store in local storage
         const data = verifyJWT(
            jwToken,
            process.env.REACT_APP_JWT_SECRET!
         ) as JwtPayload;

         console.log("Login Successful");
         console.log(data);
         userDispatch({
            type: LOGIN_SUCCESS,
            payload: {
               id: data.subject,
               username: data.username,
            },
         });
      } catch (error) {
         console.log(
            `There was a problem decoding the token: ${error.message}`
         );
         userDispatch({ type: AUTH_ERROR, payload: error });
         return false;
      }

      return true;
   };

   useEffect(() => {
      //Does user data exist?
      if (userData.user.id > 0) {
         console.log("Logging in with User data");
         console.log(userData);
         setIsLoggedIn(true);
      }

      //Does a token exist in local storage?
      else if (localToken) {
         console.log(`Logging in with local token: ${localToken}`);
         const isSuccessful: boolean = setupUserContext(localToken);

         if (isSuccessful) {
            setIsLoggedIn(true);
         }
      }

      //Does a token exist in cookies?
      else if (cookies[LOGIN_TOKEN_KEY]) {
         console.log(
            `Logging in with local token: ${cookies[LOGIN_TOKEN_KEY]}`
         );
         const isSuccessful: boolean = setupUserContext(
            cookies[LOGIN_TOKEN_KEY]
         );
         removeCookie(LOGIN_TOKEN_KEY);

         if (isSuccessful) {
            setIsLoggedIn(true);
         }
      }

      //None of the above... Not logged in
      else {
         console.log("Not Logged in; Redirecting to '/'");
         setIsLoggedIn(false);
      }

      setIsLoading(false);
   }, []);

   return isLoading ? (
      <p>Loading...</p>
   ) : (
      <Route
         {...otherProps}
         render={props => {
            console.log("Rendering PrivateRoute...");
            if (isLoggedIn) {
               console.log("logged in");
               return <Component {...props} />;
            } else {
               console.log("Not logged in");
               return <Redirect to="/" />;
            }
         }}
      />
   );
};

export default PrivateRoute;
