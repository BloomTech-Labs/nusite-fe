import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getToken, setToken } from "./useLocalStorage";
import { useCookies } from "react-cookie";

const LOGIN_TOKEN_KEY = "JWT";
const PrivateRoute = ({ component: Component, ...rest }: any) => {
   const [cookies, setCookie, removeCookie] = useCookies([LOGIN_TOKEN_KEY]);
   const localToken: string | null = getToken();
   console.log(`Local Token: ${localToken}`);
   console.log(`Cookie Token: ${JSON.stringify(cookies, null, 3)}`);

   return (
      <Route
         {...rest}
         render={(props: any) => {
            if (localToken) {
               return <Component {...props} />;
            }

            if (cookies[LOGIN_TOKEN_KEY]) {
               setToken(cookies[LOGIN_TOKEN_KEY]);
               removeCookie(LOGIN_TOKEN_KEY);
               return <Component {...props} />;
            }
            return <Redirect to="/" />;
         }}
      />
   );
};

export default PrivateRoute;

// import React from "react";
// import { Route, Redirect } from "react-router-dom";

// const PrivateRoute = ({ component, isAuthenticated, ...rest }: any) => {
//    const routeComponent = (props: any) =>
//       isAuthenticated ? (
//          React.createElement(component, props)
//       ) : (
//          <Redirect to={{ pathname: "/login" }} />
//       );
//    return <Route {...rest} render={routeComponent} />;
// };

// export default PrivateRoute;
