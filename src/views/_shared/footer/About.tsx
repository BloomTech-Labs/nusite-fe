import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles(theme => ({
   link: {
      fontFamily: "Arial",
      fontWeight: "bold",
      fontSize: "1rem",
      color: theme.palette.common.white,
      textDecoration: "none",
   },
}));

const About = (props: any) => {
   const classes = useStyles();

   const aboutRoutes = [
      // These links are currently only place holders for the time being.  These componets are not built out.
      //This array will likely have an active index property in the future for a pull down menu in the header
      { name: "About", link: "/" },
      { name: "Our Services", link: "/" },
      { name: "Contact Us", link: "/" },
      { name: "Terms of Service", link: "/" },
      { name: "Privacy Policy", link: "/" },
   ];

   return (
      <Grid lg={4} container direction="column" justify="center">
         {aboutRoutes.map((route: any) => (
            <Grid
               className={classes.link}
               item
               to={route.link}
               component={Link}
            >
               {route.name}
            </Grid>
         ))}
      </Grid>
   );
};

export default About;
