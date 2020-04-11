import React, { useEffect, useState } from "react";
import Footer from "../_shared/Footer";
import Header from "../_shared/Header";
import "../home/Home";

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
         <Footer />
      </div>
   );
};

export default Dashboard;