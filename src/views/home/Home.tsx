import React from "react";
import SocialIcons from "../_shared/SocialIcons";
import userflow from "../../images/userflow.gif";
import "./Home.css";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import coder from "../../images/coder.svg";
import developers from "../../images/developers.svg";
//import { makeStyles } from "@material-ui/core/styles";
//import Grid from "@material-ui/core/Grid"
import "./Home.css";
import Footer from "../_shared/Footer";
import Header from "../_shared/Header";
import SubHeader from "./SubHeader";
//import taglineImage from "../../images/tagline.jpeg"

const Home = (props: any) => {
   //const classes = useStyles();
   return (
      <div className="App">
         <Header />
         <SubHeader />
         <main>
            <br />
            <br />
            {/* <h1 className="tagline">
               Connecting web developers to people with great ideas. Old
               website, new website, app, or feature, we've got you covered.
            </h1> */}
            <p className="about">
               We are creating a marketplace for developers and project
               owners/clients to meet each other and form partnerships.
               Developers and project owners can offer their services and
               projects to one another and be matched according to their needs.
            </p>
            <img src={developers} alt="" className="developers" />
            <br />
         </main>
         <section>
            <br />
            <h2>Project Owners</h2>
            <br />
            <p>
               A marketplace for developers and project owners to meet each
               other and form partnerships. Developers and project owners can
               offer their services and projects to one another and be matched
               according to their needs.
            </p>
            <br />
            <br />
            <p>
               Find someone to build, fix, or add on to your existing site or
               idea in minutes. Just set up a profile and browse existing
               projects to get and idea of what you like, pick someone, and/or
               just let us give your best matches for your project based on
               developer skills. Take the workload off of yourself and get
               started today. It's easy.
            </p>
            <br />
            <br />
            <hr />
            <br />
            <h2>For Developers </h2>
            <br />
            <br />
         </section>
         <div className="parallax"></div>
         <br />
         <div className="tagline-2">
            <h4>Realtime matching based on advanced data analysis.</h4>
         </div>
         <br />
         <section>
            <br />
            <img src={coder} alt="" className="coder" />
            <br />
            <br />
            <br />
            <p>
               Register as a developer, set up a brief profile, show off your
               skills and portfolio as they continue to grow, and get paid
               projects now. It's that simple, no hiring managers, pick projects
               and let the projects you want get matched with you today.{" "}
            </p>
            <br />
            <br />
            <br />
            <div className="gif-wrapper">
               <img src={userflow} className="user-flow" alt="" />
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
         <SocialIcons />
         <Footer />
      </div>
   );
};

export default Home;
