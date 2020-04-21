import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import logo from "../../../images/logo.svg";
const useStyles = makeStyles(theme => ({
   logoContainer: {
      "padding": 0,
      "marginBottom": "20%",
      "&:hover": {
         backgroundColor: "transparent",
      },
   },
   logo: {
      height: "4em",
      [theme.breakpoints.down("md")]: {
         height: "3.5em",
      },
      [theme.breakpoints.down("xs")]: {
         height: "3.0",
      },
   },
   footerText: {
      fontFamily: "Arial",
      fontSize: "1rem",
      color: theme.palette.common.white,
      padding: "10px",
   },
}));

const CopyRight = (props: any) => {
   const classes = useStyles();
   return (
      <Grid container direction="column" alignContent="center" justify="center">
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
         <Grid item className={classes.footerText}>
            © PartNerd 2020
         </Grid>
      </Grid>
   );
};

export default CopyRight;
