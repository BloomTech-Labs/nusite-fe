import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles(theme => ({
   mainContainer: {
      padding: "0 0 20px 0",
   },
   text: {
      fontFamily: "Arial",
      fontWeight: "bold",
      fontSize: "1rem",
      color: theme.palette.common.white,
      paddingBottom: "16px",
   },
   link: {
      fontFamily: "Arial",
      fontSize: "1rem",
      color: theme.palette.common.white,
      marginBottom: "8px",
      textDecoration: "none",
   },
}));

const AboutNavFooter = (props: any) => {
   const classes = useStyles();

   const aboutRoutes = [
      // These links are currently only place holders for the time being.  These componets are not built out.
      //This array will likely have an active index property in the future for a pull down menu in the header
      { name: "About", link: "/" },
      { name: "Our Services", link: "/" },
      { name: "Contact Us", link: "/" },
      { name: "Terms of Use", link: "/" },
      { name: "Privacy Policy", link: "/" },
   ];

   return (
      <Grid
         container
         lg={4}
         xs={6}
         className={classes.mainContainer}
         direction="column"
         justify="flex-start"
      >
         <Grid item className={classes.text}>
            Company
         </Grid>
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

export default AboutNavFooter;
