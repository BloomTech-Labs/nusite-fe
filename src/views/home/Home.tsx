import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
//import "./Home.css";
import Hero from "./Hero";
import AboutSection from "./AboutSection";
import PorjectOwnersSection from "./ProjectOnwersSection";
import DevelopersSections from "./DevelopersSection";
import Parallax from "./Parallax";
const useStyles = makeStyles(theme => ({
   container: {
      width: "100%",
      padding: "0 20% 2.5% 20%",
   },
}));

const Home = (props: any) => {
   const classes = useStyles();
   return (
      <>
         <Hero className="hero" />
         <Grid container className={classes.container} direction="column">
            <AboutSection />
            <PorjectOwnersSection />
            <Parallax />
            <DevelopersSections />
         </Grid>
      </>
   );
};

export default Home;
