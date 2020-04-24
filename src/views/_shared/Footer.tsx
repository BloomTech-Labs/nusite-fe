import React from "react";
//import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

//const useStyles = makeStyles(theme => ({}));

const Footer = (props: any) => {
   return (
      <footer>
         <nav>
            <Link to="/">Home</Link>
            <Link to="/contact-us">Contact</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
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
