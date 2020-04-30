import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import "./Home.css";
import Hero from "./Hero";
import AboutSection from "./AboutSection";
import PorjectOwnersSection from "./ProjectOnwersSection";
import DevelopersSections from "./DevelopersSection";
const useStyles = makeStyles(theme => ({
   container: {},
}));

const Home = (props: any) => {
   const classes = useStyles();
   return (
      <>
         <Grid container className={classes.container} direction="column">
            <Hero className="hero" />
            <AboutSection />
            <PorjectOwnersSection />
            <DevelopersSections />
         </Grid>
      </>
   );
};

export default Home;
