import React, { useContext, Suspense } from "react";
import { Route, Redirect } from "react-router-dom";
import LoadingScreen from "../_shared/LoadingScreen";
import { getToken, setToken, setUserId } from "./useLocalStorage";
import UserContext from "../../context/user/context";
import { useLocation } from "react-router";

const LOGIN_TOKEN_KEY = "JWT";
const useQuery = () => {
   return new URLSearchParams(useLocation().search);
};

const PrivateRoute = ({ component: Component, ...otherProps }: any) => {
   const { userData } = useContext(UserContext);
   const queries = useQuery();
   const tokenQuery = queries.get("token");
   const idQuery = queries.get("query");

   const localToken: string | null = getToken();
   console.log(`Token Query: ${tokenQuery}`);
   console.log(`Id Query: ${idQuery}`);

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

               if (tokenQuery) {
                  console.log("logged in");
                  setToken(tokenQuery);
                  setUserId(Number(idQuery));
                  return <Redirect to="/home" />;
               }

               console.log("Not logged in");
               return <Redirect to="/login" />;
            }}
         />
      </Suspense>
   );
};

export default PrivateRoute;
