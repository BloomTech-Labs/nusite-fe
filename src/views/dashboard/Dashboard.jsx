import React, { useEffect, useState } from "react";
import DarkMode from "../_shared/DarkMode";
import Footer from "../_shared/Footer";
import "../home/Home";
import Logout from "../_shared/Logout";
import SocialIcons from "../_shared/SocialIcons";
import { Project } from "./ProjectForm";
import User from "./User";
//import Loding from "../_shared/Loading";

const Dashboard = props => {
   const [name, setName] = useState("Login please");

   useEffect(() => {
      const username = localStorage.getItem("username");

      if (username) {
         setName(username);
      }
   }, []);

   return (
      <>
         <div className="App">
            <main className="section-main">
               <DarkMode />
               <br />
               <h2>Welcome to Your Dashboard {name}</h2>
               <User />
            </main>
            <section className="section-main">
               <br />
               <p>
                  Get started searching the marketplace of developers and
                  project owners to meet each other and form partnerships. Enter
                  your project details below, or just browse projects as a
                  developer, and start building up your profile.
               </p>
               <br />
            </section>
            <Project />
            <br />
            <h3 className="logout" onClick={Logout}>
               Logout
            </h3>
            <br />
            <SocialIcons />
            <Footer />
         </div>
      </>
   );
};

export default Dashboard;
