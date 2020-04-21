import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { useRoutes } from "../../util/routes";
import CopyRight from "./CopyRight";
import FooterNav from "./FooterNav";
import About from "./About";
import SocialIcons from "./SocialIcons";
const useStyles = makeStyles(theme => ({
   footer: {
      background: theme.palette.primary.main,
      width: "100%",
      height: "300px",
      justifyContent: "center",
      justifyItems: "center",
      display: "flex",
      alignContent: "center",
      // position: "relative",
      // zIndex: 1302,
   },
   footerGridContainer: {
      position: "absolute",
   },
}));

const Footer = (props: any) => {
   const classes = useStyles();
   const routes = useRoutes();
   useEffect(() => {}, [routes]);

   return (
      <footer className={classes.footer}>
         <Grid
            container
            className={classes.footerGridContainer}
            direction="row"
            justify="center"
            lg={3}
         >
            <CopyRight />
            <FooterNav />
            <About />
            {/* <SocialIcons /> */}
         </Grid>
      </footer>
   );
};

export default Footer;
