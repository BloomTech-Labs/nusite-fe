import React from "react";
import { Grid, makeStyles, useMediaQuery } from "@material-ui/core/";
import useTheme from "@material-ui/core/styles/useTheme";
import taglineImage from "../../images/tagline.jpeg";

const useStyles = makeStyles(theme => ({
   mainContainer: {
      padding: 0,
      wdith: "100%",
   },
   taglineImage: {
      width: "100%",
   },
   tagline: {
      ...theme.typography.h1,
      fontWeight: 500,
      // "animationDuration": "7s",
      // "animationName": "slidein",
      display: "flex",
      width: "35%",
      textAlign: "left",
      justifyContent: "left",
      margin: "0 auto",
      color: theme.palette.secondary.dark,
      position: "absolute",
      left: "60%",
      fontSize: "2.0rem",
      maxHeight: "80%",
      lineHeight: "1.25",

      [theme.breakpoints.down("md")]: {
         fontSize: "1.75em",
      },
      [theme.breakpoints.down("sm")]: {
         fontSize: "1.1rem",
      },
      [theme.breakpoints.down("xs")]: {
         fontSize: "1.0rem",
         lineHeight: "1.1",
      },
   },
}));

const Hero = (props: any) => {
   const classes = useStyles();
   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down("xs"));

   const tagline = (
      <h3>
         Connecting people with great ideas to web developers. Old website, new
         website, app, or feature, we've got you covered.
      </h3>
   );
   const mobileTagline = (
      <h3>Connecting people with great ideas to developers.</h3>
   );
   return (
      // <Grid item>
      <Grid container>
         <Grid item>
            <img
               className={classes.taglineImage}
               src={taglineImage}
               alt="tagline"
            />
         </Grid>
         <Grid item className={classes.tagline}>
            {matches ? mobileTagline : tagline}
         </Grid>
      </Grid>
      // </Grid>
   );
};
export default Hero;
