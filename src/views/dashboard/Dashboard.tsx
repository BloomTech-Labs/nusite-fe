import React, { useEffect, useState } from "react";
import DarkMode from "../_shared/DarkMode";
import "../home/Home";
import { useMutation } from "@apollo/react-hooks";
import User from "./User";
import Button from "@material-ui/core/Button";
import { UPDATE_USER } from "../../graphql-requests/mutations";
import TextField from "@material-ui/core/TextField";
import AddButton from "./AddButton";

let user = localStorage.getItem("username");
const Dashboard: React.FC = (props: any) => {
   const [name, setName] = useState("");
   useEffect(() => {
      let username: string | null = localStorage.getItem("username");
      if (username) {
         setName(username);
      }
   }, []);

   const [users, setUsers] = useState({
      username: "",
      email: "",
      first_name: "",
      last_name: "",
   });

   const handleChange = (event: any) => {
      // event.preventDefault();
      setUsers({
         ...users,
         [event.target.name]: event.target.value,
      });
   };

   //let user_id = localStorage.getItem("user_id");
   //console.log(user_id);
   {
      const [updateUser] = useMutation(UPDATE_USER);
      //let user_id = localStorage.getItem("user_id");
      const onSubmit = ({
         user_id = localStorage.getItem("user_id"),
         first_name,
         last_name,
         username,
         email,
      }: any) => {
         console.log(user_id);
         //console.log(users);
         updateUser({
            variables: { user_id, ...users },
         })
            .then(res => {
               //console.log(updateUser);
               console.log(res.data);
               localStorage.setItem("username", res.data.updateUser.username);
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
               <h1>Welcome to Your Dashboard {name}</h1>
               <br />
               <User />
               <br />
               <p>Update/Change Your Profile</p>
               <br />
               <div className="boxedit">
                  <TextField
                     label="username: "
                     name="username"
                     variant="filled"
                     value={users.username}
                     onChange={handleChange}
                  />
                  <TextField
                     label="email: "
                     name="email"
                     variant="filled"
                     value={users.email}
                     onChange={handleChange}
                  />
                  <TextField
                     label="first name: "
                     name="first_name"
                     variant="filled"
                     value={users.first_name}
                     onChange={handleChange}
                  />
                  <TextField
                     label="last name: "
                     name="last_name"
                     variant="filled"
                     value={users.last_name}
                     onChange={handleChange}
                  />
               </div>
               <br />
               <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  onClick={onSubmit}
               >
                  Change Profile
               </Button>
               <br />
               <p>Add Project to Dashboard</p>
               <AddButton />
               <br />
            </main>
         </>
      );
   }
};

export default Dashboard;
