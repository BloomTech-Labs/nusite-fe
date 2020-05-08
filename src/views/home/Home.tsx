import React, { lazy, Suspense } from "react";
import Grid from "@material-ui/core/Grid";
import AboutSection from "./AboutSection";
import PorjectOwnersSection from "./ProjectOnwersSection";
import DevelopersSections from "./DevelopersSection";
import MatchingSection from "./MatchingSection";
import Parallax from "./Parallax";
const Hero = lazy(() => import("./Hero"));

const Home = (props: any) => {
   return (
      <>
         <Suspense fallback={<></>}>
            <Grid container justify="center">
               <Hero className="hero" />
               <Grid container className="main-container" direction="column">
                  <AboutSection />
                  <PorjectOwnersSection />
                  <Parallax />
                  <DevelopersSections />
                  <MatchingSection />
               </Grid>
            </Grid>
         </Suspense>
      </>
   );
};

export default Home;
