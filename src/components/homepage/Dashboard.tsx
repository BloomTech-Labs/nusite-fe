import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Homepage.css";
import client from "./images/client.jpg";

const Dashboard = (props: any) => {
   return (
      <>
         <Header />
         <main className="section-main">
            <h1>Welcome to Your Dashboard</h1>
         </main>
         <section>
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
      </>
   );
};

export default Dashboard;
