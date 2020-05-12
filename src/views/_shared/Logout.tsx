import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { logout } from "../../context/user/actions";
import UserContext from "../../context/user/context";

const Logout = (props: any) => {
   const { userDispatch } = useContext(UserContext);

   useEffect(() => {
      userDispatch(logout());
      localStorage.clear();
   }, [userDispatch]);

   return <Redirect to="/login" />;
};

export default Logout;
