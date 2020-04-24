import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Copyright from "./Copyright";
import MainNavFooter from "./MainNavFooter";
import AboutNavFooter from "./AboutNavFooter";

const useStyles = makeStyles(theme => ({
   footer: {
      background: theme.palette.primary.main,
      minheight: "300px",
      maxHeight: "100%",
      padding: "5% 20% 2.5% 20%",
      backgroundColor: theme.palette.grey[800],
   },
}));

const Footer = (props: any) => {
   const classes = useStyles();
   return (
      <footer className={classes.footer} data-testid="footer">
         <Grid container direction="row" justify="center">
            <MainNavFooter data-testid="footer-main-links" />
            <AboutNavFooter data-testid="footer-about-links" />
            <Copyright data-testid="footer-copyright" />
         </Grid>
      </footer>
   );
};

export default Footer;
