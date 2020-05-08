import React, { useEffect, useState } from "react";
import "../home/Home";
import { useMutation } from "@apollo/react-hooks";
import User from "./User";
import Button from "@material-ui/core/Button";
import { UPDATE_USER } from "../../graphql-requests/mutations";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
//import "./Dashboard.css";

const useStyles = makeStyles(theme => ({
   container: {
      display: "flex",
      flexFlow: "column",
      flexWrap: "wrap",
      width: "90%",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "1.2rem",
      padding: "2rem",
   },
   textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 250,
      alignItems: "left",
      textAlign: "center",
   },
   button: {
      margin: theme.spacing(1),
   },
}));

const Dashboard: React.FC = (props: any) => {
   const [name, setName] = useState("");
   const classes = useStyles();

   useEffect(() => {
      let username = localStorage.getItem("username");
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
      event.preventDefault();
      setUsers({
         ...users,
         [event.target.name]: event.target.value,
      });
   };

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
         updateUser({
            variables: { user_id, ...users },
         })
            .then(res => {
               console.log(res.data);
               setName(res.data.updateUser.username);
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
            <div className={classes.container}>
               <br />
               <h1>Welcome to Your Dashboard {name}</h1>
               <br />
               <User />
               <br />
               <p>Update/Change Your Profile</p>
               <br />
               <div className={classes.container}>
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
                  Edit Profile
               </Button>
               <br />
            </div>
         </>
      );
   }
};

export default Dashboard;
