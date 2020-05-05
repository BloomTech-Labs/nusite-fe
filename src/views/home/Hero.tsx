import React from "react";
import { Grid, makeStyles, useMediaQuery } from "@material-ui/core/";
import useTheme from "@material-ui/core/styles/useTheme";
import taglineImage from "../../images/tagline.jpeg";

const useStyles = makeStyles(theme => ({
   taglineImage: {
      width: "100%",
   },
   typography: {
      ...theme.typography.h1,
      [theme.breakpoints.down("xl")]: {
         fontSize: "35px",
      },
      [theme.breakpoints.down("lg")]: {
         fontSize: "32px",
      },
      [theme.breakpoints.down("md")]: {
         fontSize: "25px",
      },
      [theme.breakpoints.down("sm")]: {
         fontSize: "18px",
      },
      [theme.breakpoints.down(414)]: {
         fontSize: "16px",
      },
   },
   textContainer: {
      paddingTop: "2.5%",
      display: "flex",
      width: "35%",
      textAlign: "left",
      justifyContent: "left",
      margin: "0 auto",
      position: "absolute",
      left: "60%",
      maxHeight: "80%",
      [theme.breakpoints.down("xs")]: {
         paddingTop: 0,
      },
   },
}));

const Hero = (props: any) => {
   const classes = useStyles();
   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down("xs"));

   const tagline = (
      <h1 className={classes.typography}>
         Connecting people with great ideas to web developers. Old website, new
         website, app, or feature, we've got you covered.
      </h1>
   );
   const mobileTagline = (
      <h1 className={classes.typography}>
         Connecting people with great ideas to developers.
      </h1>
   );
   return (
      <Grid container>
         <Grid item>
            <img
               className={classes.taglineImage}
               src={taglineImage}
               alt="tagline"
            />
         </Grid>
         <Grid item className={classes.textContainer}>
            {matches ? mobileTagline : tagline}
         </Grid>
      </Grid>
   );
};
export default Hero;
