import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import logo from "../../../images/footer-logo.svg";
import SocialIcons from "./SocialIcons";
const useStyles = makeStyles(theme => ({
   logoContainer: {
      "padding": 0,
      "marginBottom": "10px",
      "&:hover": {
         backgroundColor: "transparent",
      },
   },
   logo: {
      height: "3.5em",
      [theme.breakpoints.down("md")]: {
         height: "3.0em",
      },
      [theme.breakpoints.down("xs")]: {
         height: "2.5",
      },
   },
   footerText: {
      fontFamily: "Arial",
      fontSize: "1rem",
      color: theme.palette.common.white,
      padding: "0 0 8px 0",
   },
   copyrightText: {
      fontFamily: "Arial",
      fontSize: ".7rem",
      color: theme.palette.common.white,
      padding: "0 0 8px 0",
   },
}));

const CopyRight = (props: any) => {
   const classes = useStyles();
   return (
      <Grid item lg={4} md={6}>
         <Grid
            container
            direction="column"
            alignContent="flex-start"
            justify="flex-start"
            alignItems="center"
         >
            <Grid item>
               <Button
                  className={classes.logoContainer}
                  component={Link}
                  to="/"
                  disableRipple
               >
                  <img className={classes.logo} src={logo} alt="company logo" />
               </Button>
            </Grid>
            <Grid item className={classes.footerText}>
               A web development marketplace
            </Grid>
            <Grid item className={classes.copyrightText}>
               © PartNerd 2020
            </Grid>
            <Grid item className={classes.footerText}>
               Follow us on
            </Grid>
            <Grid item>
               <SocialIcons />
            </Grid>
         </Grid>
      </Grid>
   );
};

export default CopyRight;
