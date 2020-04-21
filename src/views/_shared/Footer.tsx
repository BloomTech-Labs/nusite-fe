import React from "react";
//import { makeStyles } from "@material-ui/core/styles";
//import { Link } from "react-router-dom";

//const useStyles = makeStyles(theme => ({}));

const Footer = (props: any) => {
   return (
      <footer>
         <nav>
            <a href="https://partnerd.dev">Home</a>
            <a href="https://partnerd.dev">Contact</a>
            <a href="https://partnerd.dev/login">Login</a>
            <a href="https://partnerd.dev/register">Register</a>
         </nav>
         <br />
         <h4>A web development marketplace</h4>
         <br />
         <h4>© PartNerd 2020</h4>
         <br />
      </footer>
   );
};

export default Footer;
