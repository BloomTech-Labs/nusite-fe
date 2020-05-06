import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core/";
import developersImage from "../../images/developers.svg";

const useStyles = makeStyles(theme => ({
   developersImage: {
      maxWidth: "100%",
      [theme.breakpoints.down("sm")]: {
         //paddingTop: "15%",
      },
   },
}));

const AboutSection = (props: any) => {
   const classes = useStyles();

   return (
      <Grid item component="main" className="item-container">
         <Grid container direction="row" spacing={3}>
            <Grid item lg={8} md={9}>
               <Typography variant="h1">About Us</Typography>
               <Typography variant="body1" component="p" className="about">
                  Welcome to PartNerd. We are a marketplace where clients and
                  developers can form partnerships. Take the guess work out of
                  finding a qualified developer for your existing project or
                  next big idea and let us match you with a developer according
                  to your needs. Our market place empowers clients to create a
                  listing for their new or existing project and for developers
                  to showcase their services to prospective clients.
               </Typography>
            </Grid>
            <Grid item lg={4} md={3}>
               <img
                  className={classes.developersImage}
                  src={developersImage}
                  alt=""
                  //className="developers"
               />
            </Grid>
         </Grid>
      </Grid>
   );
};
export default AboutSection;
