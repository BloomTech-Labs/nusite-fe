import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { LOGOUT } from "../../context/user/actions";
import UserContext from "../../context/user/context";

const Logout = (props: any) => {
   const { userDispatch } = useContext(UserContext);

   useEffect(() => {
      userDispatch({ type: LOGOUT, payload: null });
      localStorage.clear();
   }, []);

   return <Redirect to="/login" />;
};

export default Logout;
