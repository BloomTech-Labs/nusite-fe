import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Grid, makeStyles, Typography } from "@material-ui/core/";
import myapp2 from "../../images/myapp2.svg";

const useStyles = makeStyles(theme => ({
   image: {
      maxWidth: "100%",
   },
}));

const DevelopersSection = (props: any) => {
   const classes = useStyles();

   return (
      <Grid item component="section" className="item-container">
         <Grid container direction="column">
            <Grid container direction="row" spacing={3}>
               <Grid item lg={8} md={9}>
                  <Typography variant="h1">For Developers </Typography>
                  <Typography variant="body1" component="p">
                     Register as a developer, set up a profile, show off your
                     skills and portfolio as they continue to grow, and get paid
                     projects now. It's that simple, no hiring managers, pick
                     projects and let the projects you want get matched with you
                     today.
                  </Typography>
               </Grid>
               <Grid item lg={4} md={3}>
                  <img className={classes.image} src={myapp2} alt="" />
               </Grid>
            </Grid>
         </Grid>
      </Grid>
   );
};
export default DevelopersSection;
