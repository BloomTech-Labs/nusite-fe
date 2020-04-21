import React, { useEffect, useState } from "react";
import DarkMode from "../_shared/DarkMode";
import "../home/Home";
//import Logout from "../_shared/Logout";
//import { Project } from "./ProjectForm";
import User from "./User";
import Button from "@material-ui/core/Button";

const Dashboard = (props: any) => {
   const [name, setName] = useState("Anonymous");
   const [user_id, setUser] = useState("");

   useEffect(() => {
      let username: string | null = localStorage.getItem("username");
      if (username) {
         setName(username);
      }
      let user_id: string | null = localStorage.getItem("user_id");
      if (user_id) {
         setUser(user_id);
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
            <Button variant="contained" color="primary" type="submit">
               Edit Profile
            </Button>
            <br />
         </main>
      </div>
   );
};

export default Dashboard;
