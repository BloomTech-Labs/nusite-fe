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
      ...theme.typography.h3,
      "fontWeight": 500,
      "animationDuration": "7s",
      "animationName": "slidein",
      "display": "flex",
      "width": "35%",
      "textAlign": "left",
      "justifyContent": "left",
      "margin": "0 auto",
      "color": theme.palette.secondary.dark,
      "position": "absolute",
      "left": "60%",
      "fontSize": "2.5em",
      "maxHeight": "80%",

      "@KeyframeEffect & slidein": {
         from: {
            marginLeft: "100%",
            width: "300%",
         },
         to: {
            marginLeft: "0%",
            width: "100%",
         },
      },

      [theme.breakpoints.down("md")]: {
         fontSize: "2.0rem",
      },
      [theme.breakpoints.down("sm")]: {
         fontSize: "1.5rem",
      },
   },
}));

const Hero = (props: any) => {
   const classes = useStyles();
   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down("xs"));

   const tagline = (
      <h3>
         Connecting web developers to people with great ideas. Old website, new
         website, app, or feature, we've got you covered.
      </h3>
   );
   const mobileTagline = (
      <h3>Connecting developers to people with great ideas.</h3>
   );
   return (
      <Grid item>
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
      </Grid>
   );
};
export default Hero;
