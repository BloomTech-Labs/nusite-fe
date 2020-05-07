import React, { useContext, useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { getToken } from "./useLocalStorage";
import { useCookies } from "react-cookie";
import { verify as verifyJWT } from "jsonwebtoken";
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
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const { userData, userDispatch } = useContext(UserContext);
   const [cookies, setCookie, removeCookie] = useCookies([LOGIN_TOKEN_KEY]);
   const localToken: string | null = getToken();
   console.log(`Local Token: ${localToken}`);
   console.log(`Cookie Token: ${JSON.stringify(cookies, null, 3)}`);

   const setupUserContext = (jwToken: string): boolean => {
      console.log("Setting UserContext...");
      userDispatch({ type: LOGIN_START, payload: null });

      try {
         //extract user id from the token and store in local storage
         const data = verifyJWT(
            jwToken,
            process.env.REACT_APP_JWT_SECRET!
         ) as JwtPayload;

         userDispatch({
            type: LOGIN_SUCCESS,
            payload: {
               id: data.subject,
               username: data.username,
            },
         });
      } catch (error) {
         userDispatch({ type: AUTH_ERROR, payload: error });
         return false;
      }

      return true;
   };

   useEffect(() => {
      //Does user data exist?
      if (userData.user.id > 0) {
         setIsLoggedIn(true);
      }

      //Does a token exist in local storage?
      else if (localToken) {
         const isSuccessful: boolean = setupUserContext(localToken);

         if (isSuccessful) {
            setIsLoggedIn(true);
         }
      }

      //Does a token exist in cookies?
      else if (cookies[LOGIN_TOKEN_KEY]) {
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
         setIsLoggedIn(false);
      }
   }, []);

   return (
      <Route
         {...otherProps}
         render={props => {
            if (isLoggedIn) {
               return <Component {...props} />;
            } else {
               return <Redirect to="/" />;
            }
         }}
      />
   );
};

export default PrivateRoute;
