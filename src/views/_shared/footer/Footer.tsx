import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CopyRight from "./CopyRight";
import MainNavFooter from "./MainNavFooter";
import AboutNavFooter from "./AboutNavFooter";
const useStyles = makeStyles(theme => ({
   //Mobile view may need a little more tweeking
   footer: {
      background: theme.palette.primary.main,
      // width: "100%",
      height: "300px",
      padding: "5% 20% 0 20%",
      backgroundColor: theme.palette.grey[800],
      // position: "relative",
      // zIndex: 1302,
   },
   footerGridContainer: {
      // position: "absolute",
   },
}));

const Footer = (props: any) => {
   const classes = useStyles();

   return (
      <footer className={classes.footer}>
         <Grid
            container
            lg={12}
            className={classes.footerGridContainer}
            direction="row"
            justify="center"
         >
            <MainNavFooter />
            <AboutNavFooter />
            <CopyRight />
         </Grid>
      </footer>
   );
};

export default Footer;
