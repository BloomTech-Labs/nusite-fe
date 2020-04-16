import React, { useEffect, useState } from "react";
import Footer from "../_shared/Footer";
import Header from "../_shared/Header";
import "../home/Home";
import client from "../../images/client.jpg";
import Logout from "../_shared/Logout";
import DarkMode from "../_shared/DarkMode";
import SocialIcons from "../_shared/SocialIcons";
//import { useQuery } from "react-apollo";
//import { USER_QUERY } from "../../graphql-requests/queries";
import { Project } from "./ProjectForm";
import User from "./User";

const Dashboard = (props: any) => {
   const [name, setName] = useState("Anonymous");
   const user_id = localStorage.getItem("user_id");
   useEffect(() => {
      const username = localStorage.getItem("username");

      if (username) {
         setName(username);
      }
   }, []);

   return (
      <>
         <div className="App">
            <Header />
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
