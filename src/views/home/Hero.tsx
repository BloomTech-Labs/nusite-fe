import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import taglineImage from "../../images/tagline.jpeg";
//import { createMuiTheme } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
   taglineImage: {
      maxWidth: "100%",
   },
   tagline: {
      ...theme.typography.h3,
      fontWeight: 500,
      animationDuration: "2s",
      animationName: "slidein",
      display: "flex",
      width: "35%",
      textAlign: "left",
      justifyContent: "left",
      margin: "0, auto",
      color: theme.palette.secondary.dark,
      position: "absolute",
      left: "60%",
      fontSize: "2.5rem",
      [theme.breakpoints.down("md")]: {
         fontSize: "1.5rem",
      },
      [theme.breakpoints.down("xs")]: {
         height: ".7rem",
         width: "50%",
         fontWeight: 500,
      },
   },
}));

const Hero = (props: any) => {
   const classes = useStyles();
   return (
      <Grid container direction="column">
         <img
            className={classes.taglineImage}
            src={taglineImage}
            alt="tagline"
         />
         <h3 className={classes.tagline}>
            Connecting web developers to people with great ideas. Old website,
            new website, app, or feature, we've got you covered.
         </h3>
      </Grid>
   );
};
export default Hero;
