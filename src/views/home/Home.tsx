import React, { lazy, Suspense, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
//import "./Home.css";
import AboutSection from "./AboutSection";
import PorjectOwnersSection from "./ProjectOnwersSection";
import DevelopersSections from "./DevelopersSection";
import Parallax from "./Parallax";
const Hero = lazy(() => import("./Hero"));

const Home = (props: any) => {
   return (
      <>
         <Suspense fallback={<React.Fragment />}>
            <Hero className="hero" />
            <Grid container className="main-container" direction="column">
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
