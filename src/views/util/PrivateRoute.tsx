import React, { useContext, Suspense } from "react";
import { Route, Redirect } from "react-router-dom";
import LoadingScreen from "../_shared/LoadingScreen";
import { getToken, setToken } from "./useLocalStorage";
import { useCookies } from "react-cookie";
import UserContext from "../../context/user/context";

const LOGIN_TOKEN_KEY = "JWT";
const PrivateRoute = ({ component: Component, ...otherProps }: any) => {
   const { userData } = useContext(UserContext);
   const [cookies, setCookie, removeCookie] = useCookies([LOGIN_TOKEN_KEY]);

   const localToken: string | null = getToken();
   const cookieToken: string | undefined = cookies[LOGIN_TOKEN_KEY];

   return (
      <Suspense fallback={<LoadingScreen />}>
         <Route
            {...otherProps}
            render={props => {
               console.log("Rendering PrivateRoute...");
               if (userData.user.id > 0 || localToken) {
                  console.log("logged in");
                  return <Component {...props} />;
               }

               if (cookieToken) {
                  console.log("logged in");
                  setToken(cookieToken);
                  removeCookie(LOGIN_TOKEN_KEY);
                  return <Component {...props} />;
               }

               console.log("Not logged in");
               return <Redirect to="/login" />;
            }}
         />
      </Suspense>
   );
};

export default PrivateRoute;
