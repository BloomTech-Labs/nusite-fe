import React, { useEffect, useState } from "react";
import DarkMode from "../_shared/DarkMode";
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
         <main className="section-main">
            <br />
            <DarkMode />
            <br />
            <h2>Welcome to Your Dashboard {name}</h2>
         </main>
      </div>
   );
};

export default Dashboard;
