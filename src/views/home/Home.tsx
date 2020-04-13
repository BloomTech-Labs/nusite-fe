import React from "react";
//import { makeStyles } from "@material-ui/core/styles";
//import Grid from "@material-ui/core/Grid"
import client from "../../images/client.jpg";
import userflow from "../../images/userflow.gif";
import "./Home.css";
import Footer from "../_shared/Footer";
import Header from "../_shared/Header";
import SubHeader from "./SubHeader"
//import taglineImage from "../../images/tagline.jpeg"

const Home = (props: any) => {
   //const classes = useStyles();
   return (
      <div className="App">
         <Header />
         <SubHeader/>
         <main>
            <br />
            <br />
            <br />
            {/* <h1 className="tagline">
               Connecting web developers to people with great ideas. Old
               website, new website, app, or feature, we've got you covered.
            </h1> */}
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
         <section>
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
               {/* <Button
                  variant="contained"
                  className="start-main"
                  color="secondary"
               >
                  <NavLink to="/register">Get Started</NavLink>
               </Button> */}
            </h4>
            <br />
            <br />
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
      </div>
   );
};

export default Home;
