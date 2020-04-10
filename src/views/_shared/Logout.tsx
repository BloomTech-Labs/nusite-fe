import React from "react";
import { Redirect } from "react-router-dom";

const Logout = (props: any) => {
   // Nothing has to happen on the server to log out,
   // just delete the token
   localStorage.removeItem("token");
   localStorage.removeItem("username");
   return <Redirect to="/login" />;
};
export default Logout;
