import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getToken, setToken } from "./useLocalStorage";

const getCookieToken = (): string | null => {
   const searchValue = /(?:(?:^|.*;\s*)JWT\s*\=\s*([^;]*).*$)|^.*$/;
   const cookieValue = document.cookie.replace(searchValue, "$1");

   if (cookieValue) document.cookie = "JWT=";
   return cookieValue;
};

const clearCookieToken = (): void => {};

const PrivateRoute = ({ component: Component, ...rest }: any) => {
   return (
      <Route
         {...rest}
         render={(props: any) => {
            const localToken: string | null = getToken();
            const cookieToken: string | null = getCookieToken();
            console.log(`Local Token: ${localToken}`);
            console.log(`Cookie Token: ${cookieToken}`);

            if (localToken) {
               return <Component {...props} />;
            }

            if (cookieToken) {
               setToken(cookieToken);
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
