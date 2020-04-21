import React, { useEffect, useState } from "react";
import DarkMode from "../_shared/DarkMode";
import "../home/Home";
import Logout from "../_shared/Logout";
//import { Project } from "./ProjectForm";
import User from "./User";

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
            <br />
            <User />
            <br />
            <h3 className="logout" onClick={Logout}>
               Logout
            </h3>
            <br />
         </main>
      </div>
   );
};

export default Dashboard;
