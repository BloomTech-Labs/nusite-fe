import React, { useEffect, useState } from "react";
import Footer from "../_shared/Footer";
import Header from "../_shared/Header";
import "../home/Home";
import client from "../../images/client.jpg";
import Logout from "../_shared/Logout";

const Dashboard = (props: any) => {
   const [name, setName] = useState("Anonymous");

   useEffect(() => {
      const username: string | null = localStorage.getItem("username");

      if (username) {
         setName(username);
      }
   }, []);

   return (
      <div className="App">
         <Header />
         <main className="section-main">
            <h2>Welcome to Your Dashboard {name}</h2>
         </main>
         <section className="section-main">
            <br />
            <h2>Project Builders</h2>
            <br />
            <img src={client} className="avatars" alt="" />
            <br />
            <p>
               Get started searching the marketplace of developers and project
               owners to meet each other and form partnerships.
            </p>
            <br />
            <br />
            <br />
            <h2>Web Developers</h2>
            <br />
            <p>
               Register as a developer, set up a brief profile, show off your
               skills and portfolio as they continue to grow, and get paid
               projects now. It's that simple, no hiring managers, pick projects
               and let the projects you want get matched with you today.
            </p>
            <br />
            <br />
            <h4 className="logout" onClick={Logout}>
               Logout
            </h4>
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

export default Dashboard;
