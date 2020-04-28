import React, { useEffect, useState } from "react";
import DarkMode from "../_shared/DarkMode";
import "../home/Home";
import { useMutation } from "@apollo/react-hooks";
import User from "./User";
import Button from "@material-ui/core/Button";
//import { Query, QueryResult } from "react-apollo";
import { UPDATE_USER } from "../../graphql-requests/mutations";
//import { GET_USER } from "../../graphql-requests/queries";
let user_id = localStorage.getItem("user_id");

const Dashboard: React.FC = (props: any) => {
   const [name, setName] = useState("");
   useEffect(() => {
      let username: string | null = localStorage.getItem("username");
      if (username) {
         setName(username);
      }
   }, []);
   console.log(user_id);

   const [updateUser] = useMutation(UPDATE_USER);
   const onSubmit = ({ first_name, last_name, username, email }: any) => {
      console.log(localStorage.getItem("user_id"));
      let user_id = localStorage.getItem("user_id");
      updateUser({
         variables: {
            user_id,
            first_name: first_name,
            last_name: last_name,
            username: username,
            email: email,
         },
      })
         .then(res => {
            console.log(res.data);
            props.history.push("/home");
            console.log("Successfully updated.");
         })
         .catch(err => {
            alert(err.message);
            console.log(err);
         });
   };
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
            <Button
               variant="contained"
               color="primary"
               type="submit"
               onClick={onSubmit}
            >
               Edit Profile
            </Button>
            <br />
            <br />
         </main>
      </>
   );
};

export default Dashboard;
