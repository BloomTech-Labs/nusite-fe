import React, { useState } from "react";
import client from "./images/client.jpg";
import userflow from "./images/userflow.gif";
import "./Homepage.css";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { ThemeContext } from "../darkmode/contexts";
import DarkMode from "../darkmode/DarkMode";
import Footer from "./Footer";
import Header from "./Header";

const Home = (props: any) => {
   const [darkMode, setDarkMode] = useState(false);
   const theme = {
      darkMode,
      // can even pass the setter function so children can
      // trigger changes
      setDarkMode,
   };

   return (
      <ThemeContext.Provider value={theme}>
         <Header />
         <main className={`App${theme.darkMode ? "_dark" : ""}`}>
            <br />
            <DarkMode />
            <br />
            <br />
            <h1 className="tagline">
               Connecting web developers to people with great ideas. Old
               website, new website, app, or feature, we've got you covered.
            </h1>
            <br />

            <p>
               We are creating a marketplace for developers and project
               owners/clients to meet each other and form partnerships.
               Developers and project owners can offer their services and
               projects to one another and be matched according to their needs.
            </p>
            <br />
            <br />
         </main>
         <div className="parallax">
            <br />
            <br />
            <h2 className="tagline-2">
               Comprehensive recommendation based on advanced data analysis.
            </h2>
         </div>
         <br />
         <section className={`App${theme.darkMode ? "_dark" : ""}`}>
            <br />
            <h2>Project Builders</h2>
            <br />
            <img src={client} className="avatars" alt="" />
            <br />
            <p>
               A marketplace for developers and project owners to meet each
               other and form partnerships. Developers and project owners can
               offer their services and projects to one another and be matched
               according to their needs.
            </p>
            <br />
            <br />
            <br />
            <div className="gif-wrapper">
               <img src={userflow} className="user-flow" alt="" />
            </div>
            <br />
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
            <br />
            <hr />
            <br />
            <h4 className="tagline">
               PartNerd™ provides users a comprehensive recommendation
               generation based on advanced data analysis.
               <br />
               <Button variant="contained" className="start-main">
                  <NavLink to="/register">Get Started</NavLink>
               </Button>
            </h4>
            <br />
            <div className="google-btn">
               <div className="google-icon-wrapper">
                  <img
                     className="google-icon"
                     src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                     alt=""
                  />
               </div>
               <a href="https://google.com/">
                  <p className="btn-text">
                     <b>Google Register</b>
                  </p>
               </a>
            </div>
            <br />
            <div className="github-btn">
               <div className="github-icon-wrapper">
                  <img
                     className="github-icon"
                     src="data:image/png;base64,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"
                     alt=""
                  />
               </div>
               <a href="https://github.com/">
                  <p className="btn-text">
                     <b>Github Register</b>
                  </p>
               </a>
            </div>
            <br />
            <br />
            <hr />
            <br />
            <h2>For Developers </h2>
            <br />
            <p>
               Register as a developer, set up a brief profile, show off your
               skills and portfolio as they continue to grow, and get paid
               projects now. It's that simple, no hiring managers, pick projects
               and let the projects you want get matched with you today.{" "}
            </p>
            <br />
            <br />
         </section>
         <section className="center">
            <div id="social-test">
               <div className="social">
                  <div>
                     <li>
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                     </li>
                     <li>
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                     </li>
                     <li>
                        <i className="fa fa-github" aria-hidden="true"></i>
                     </li>
                     <li>
                        <i
                           className="fa fa-linkedin-square"
                           aria-hidden="true"
                        ></i>
                     </li>
                  </div>
               </div>
            </div>
         </section>
         <Footer />
      </ThemeContext.Provider>
   );
};

export default Home;
