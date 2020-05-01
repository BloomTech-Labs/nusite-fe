import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Grid, makeStyles, useMediaQuery } from "@material-ui/core/";
import useTheme from "@material-ui/core/styles/useTheme";
import coder from "../../images/coder.svg";
import myapp2 from "../../images/myapp2.svg";
import userflow from "../../images/userflow.gif";

const useStyles = makeStyles(theme => ({
   mainContainer: {},
   image: {
      maxWidth: "100px",
   },
}));

const DevelopersSection = (props: any) => {
   const classes = useStyles();
   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down("xs"));

   return (
      <Grid item>
         <Grid container direction="column" className={classes.mainContainer}>
            <h2>For Developers </h2>
            <br />
            <img className={classes.image} src={myapp2} alt="" />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="parallax"></div>
            <br />
            <div className="tagline-2">
               <h4>Realtime matching based on advanced data analysis.</h4>
            </div>
            <br />
            <section>
               <br />
               <img
                  src={coder}
                  alt=""
                  // className="coder"
                  className={classes.image}
               />
               <br />
               <br />
               <br />
               <p>
                  Register as a developer, set up a brief profile, show off your
                  skills and portfolio as they continue to grow, and get paid
                  projects now. It's that simple, no hiring managers, pick
                  projects and let the projects you want get matched with you
                  today.
               </p>
               <br />
               <br />
               <br />
               <div className="gif-wrapper">
                  <img
                     src={userflow}
                     className={classes.image}
                     // className="user-flow"
                     alt=""
                  />
               </div>
               <br />
               <br />
               <hr />
               <br />
               <h4 className="tagline-3">
                  PartNerd™ provides users a comprehensive recommendation
                  generation based on advanced data analysis.
                  <br />
                  <Button
                     variant="contained"
                     className="start-main"
                     color="primary"
                  >
                     <NavLink to="/register">Get Started</NavLink>
                  </Button>
               </h4>
               <br />
               <p className="terms">
                  By registering you are agreeing to our
                  <a href="https://www.websitepolicies.com/blog/sample-terms-service-template">
                     * terms of service.
                  </a>
               </p>
               <br />
               <br />
               <br />
            </section>
         </Grid>
      </Grid>
   );
};
export default DevelopersSection;
