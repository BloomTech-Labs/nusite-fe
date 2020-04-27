import React, { useEffect, useState } from "react";
import DarkMode from "../_shared/DarkMode";
import "../home/Home";
//import { Project } from "./ProjectForm";
import User from "./User";
import Button from "@material-ui/core/Button";
//import ProfileDrawer from "./ProfileDrawer";

const Dashboard = (props: any) => {
   //const classes = useStyles();
   const [name, setName] = useState("Anonymous");

   useEffect(() => {
      let username: string | null = localStorage.getItem("username");
      if (username) {
         setName(username);
      }
   }, []);

   return (
      <>
         <main className="dashboard">
            <br />
            <DarkMode />
            <br />
            <h1 className="dashboard">Welcome to Your Dashboard {name}</h1>
            <br />
            <User />
            <br />
            <Button variant="contained" color="primary" type="submit">
               Edit Profile
            </Button>
            <br />
            <br />
            <br />
         </main>
      </>
   );
};

export default Dashboard;
