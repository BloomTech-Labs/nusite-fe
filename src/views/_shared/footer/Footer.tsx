import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CopyRight from "./CopyRight";
import MainNavFooter from "./MainNavFooter";
import AboutNavFooter from "./AboutNavFooter";

const useStyles = makeStyles(theme => ({
   footer: {
      background: theme.palette.primary.main,
      // width: "100%",
      minheight: "300px",
      maxHeight: "100%",
      padding: "5% 20% 2.5% 20%",
      backgroundColor: theme.palette.grey[800],
   },
}));

const Footer = (props: any) => {
   const classes = useStyles();
   return (
      <footer className={classes.footer}>
         <Grid container direction="row" justify="center">
            <MainNavFooter />
            <AboutNavFooter />
            <CopyRight />
         </Grid>
      </footer>
   );
};

export default Footer;
