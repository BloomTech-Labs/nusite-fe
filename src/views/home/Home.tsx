import React, { lazy, Suspense } from "react";
import Grid from "@material-ui/core/Grid";
import AboutSection from "./AboutSection";
import PorjectOwnersSection from "./ProjectOnwersSection";
import DevelopersSections from "./DevelopersSection";
import MatchesSection from "./MatchesSection";
import Parallax from "./Parallax";
const Hero = lazy(() => import("./Hero"));

const Home = (props: any) => {
   return (
      <>
         <Suspense fallback={<></>}>
            <Hero className="hero" />
            <Grid container className="main-container" direction="column">
               <AboutSection />
               <PorjectOwnersSection />
               <Parallax />
               <DevelopersSections />
               <MatchesSection />
            </Grid>
         </Suspense>
      </>
   );
};

export default Home;
