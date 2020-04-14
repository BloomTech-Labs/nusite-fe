import React, { useEffect, useState } from "react";
import Footer from "../_shared/Footer";
import Header from "../_shared/Header";
import "../home/Home";
import client from "../../images/client.jpg";
import Logout from "../_shared/Logout";
import DarkMode from "../_shared/DarkMode";
import SocialIcons from "../_shared/SocialIcons";

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
            <br />
            <DarkMode />
            <br />
            <h2>Welcome to Your Dashboard {name}</h2>
         </main>
         <section className="section-main">
            <br />
            <h2>Build Your Profile Now</h2>
            <br />
            <img src={client} className="avatars" alt="" />
            <br />
            <p>
               Get started searching the marketplace of developers and project
               owners to meet each other and form partnerships.
            </p>
            <br />
            <br />
            <h4 className="logout" onClick={Logout}>
               Logout
            </h4>
            <br />
         </section>
         <SocialIcons />
         <Footer />
      </div>
   );
};

export default Dashboard;
