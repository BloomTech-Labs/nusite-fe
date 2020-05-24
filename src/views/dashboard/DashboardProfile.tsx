import React, { useEffect, useState } from "react";
import "../home/Home";
import { useMutation } from "@apollo/react-hooks";
import { SIGNUP } from "../../graphql-requests/mutations";
import { makeStyles, Button, TextField } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
   container: {
      display: "flex",
      flexFlow: "column",
      flexWrap: "wrap",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "1.2rem",
      padding: "2rem",
   },
   textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "70%",
      alignItems: "center",
      textAlign: "center",
   },
   button: {
      margin: theme.spacing(1),
   },
}));

const DashboardProfile: React.FC = (props: any) => {
   const [name, setName] = useState("");
   const classes = useStyles();
   useEffect(() => {
      let name = localStorage.getItem("username");
      if (name) {
         setName(name);
      }
   }, []);

   const [users, setUsers] = useState({
      username: "",
      email: "",
      first_name: "",
      last_name: "",
      password: "",
   });

   const handleChange = (event: any) => {
      event.preventDefault();
      setUsers({
         ...users,
         [event.target.name]: event.target.value,
      });
   };

   {
      const [signup] = useMutation(SIGNUP);
      //let user_id = localStorage.getItem("user_id");
      const onSubmit = ({
         first_name,
         last_name,
         username,
         email,
         password,
      }: any) => {
         //console.log(onSubmit);
         signup({
            variables: { ...users },
         })
            .then(res => {
               console.log(res.data);
               localStorage.setItem("username", res.data.signup.username);
               localStorage.setItem("user_id", res.data.signup.id);
               alert("Last step, Now verify your new credentials");
               props.history.push("/login");
               console.log("Successfully updated.");
            })
            .catch(err => {
               alert(err.message);
               console.log(err);
            });
      };
      return (
         <>
            <main className={classes.container}>
               <br />
               <h1>Welcome to Your Dashboard {name}</h1>
               <br />
               <p>Get started Building Your Profile!</p>
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
                  <TextField
                     label="password: "
                     name="password"
                     variant="filled"
                     type="password"
                     value={users.password}
                     onChange={handleChange}
                  />
                  <br />
                  <TextField
                     label="upload image url: "
                     name="image"
                     variant="filled"
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
                  Submit Profile
               </Button>
               <br />
            </main>
         </>
      );
   }
};

export default DashboardProfile;
