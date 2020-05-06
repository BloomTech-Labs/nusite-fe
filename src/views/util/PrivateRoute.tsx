import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getToken, setToken } from "./useLocalStorage";
import { useCookies } from "react-cookie";

const setupUserContext = (jwToken: string) => {
   //extract user id from the token and store in local storage
   //Secret words need to match
   //store the token in local storage
};

const LOGIN_TOKEN_KEY = "JWT";
const PrivateRoute = ({ component: Component, ...otherProps }: any) => {
   const [cookies, setCookie, removeCookie] = useCookies([LOGIN_TOKEN_KEY]);
   const localToken: string | null = getToken();
   console.log(`Local Token: ${localToken}`);
   console.log(`Cookie Token: ${JSON.stringify(cookies, null, 3)}`);

   return (
      <Route
         {...otherProps}
         render={(props: any) => {
            if (localToken) {
               return <Component {...props} />;
            }

            if (cookies[LOGIN_TOKEN_KEY]) {
               setupUserContext(cookies[LOGIN_TOKEN_KEY]);
               removeCookie(LOGIN_TOKEN_KEY);
               return <Component {...props} />;
            }
            return <Redirect to="/" />;
         }}
      />
   );
};

export default PrivateRoute;
