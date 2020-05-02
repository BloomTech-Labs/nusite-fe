import React, { lazy, Suspense, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
//import "./Home.css";
import AboutSection from "./AboutSection";
import PorjectOwnersSection from "./ProjectOnwersSection";
import DevelopersSections from "./DevelopersSection";
import Parallax from "./Parallax";
const Hero = React.lazy(() => import("./Hero"));

const useStyles = makeStyles(theme => ({
   container: {
      width: "100%",
      padding: "0 20% 2.5% 20%",

      [theme.breakpoints.down("md")]: {
         padding: "0 15% 2.5% 15%",
      },
      [theme.breakpoints.down("sm")]: {
         padding: "0 5% 2.5% 5%",
      },
      [theme.breakpoints.down("xs")]: {
         padding: "0 2.5% 2.5% 2.5%",
      },
   },
}));

const Home = (props: any) => {
   const classes = useStyles();
   return (
      <>
         <Suspense fallback={<React.Fragment />}>
            <Hero className="hero" />
            <Grid container className={classes.container} direction="column">
               <AboutSection />
               <PorjectOwnersSection />
               <Parallax />
               <DevelopersSections />
            </Grid>
         </Suspense>
      </>
   );
};

export default Home;
