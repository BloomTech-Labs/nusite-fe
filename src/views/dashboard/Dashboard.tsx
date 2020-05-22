import React, { useState, useEffect } from "react";
import myapp2 from "../../images/myapp2.svg";
import { useMutation } from "@apollo/react-hooks";
import User from "./User";
import Button from "@material-ui/core/Button";
import { UPDATE_USER } from "../../graphql-requests/mutations";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { getUserId } from "../util/useLocalStorage";
import Upload from "./Upload";
import reatime2 from "../../images/reatime2.svg";
import { Link } from "react-router-dom";

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
      background: "white",
      textAlign: "left",
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

export const Dashboard: React.FC = (props: any) => {
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
      company: "",
      dev_experience: "",
      dev_education: "",
   });

   const handleChange = (event: any) => {
      event.preventDefault();
      //event.stopPropagation();
      setUsers({
         ...users,
         [event.target.name]: event.target.value,
      });
   };

   {
      const [updateUser] = useMutation(UPDATE_USER);
      const onSubmit = ({
         user_id = getUserId(),
         first_name,
         last_name,
         username,
         email,
         company,
         dev_experience,
         dev_education,
      }: any) => {
         //console.log(user_id);
         updateUser({
            variables: { user_id, ...users },
         })
            .then(res => {
               console.log(res.data);
               setName(res.data.updateUser.username);
               localStorage.setItem("username", res.data.updateUser.username);
               localStorage.setItem(
                  "first_name",
                  res.data.updateUser.first_name
               );
               localStorage.setItem("last_name", res.data.updateUser.last_name);
               localStorage.setItem("email", res.data.updateUser.email);
               props.history.push("/home");
               //let userinfo = res.data;
               console.log("Successfully updated.");
            })
            .catch(err => {
               //alert(err.message);
               console.log(err);
               console.log(err.message);
            });
      };

      return (
         <>
            <div className="grid-container">
               <main className="main">
                  <div className="main-header">
                     <div className="main-header__heading">
                        <h2 style={{ color: "#25274d" }}>Hello {name}!</h2>
                        <Link to="/chat" style={{ color: "#444" }}>
                           <p>(Chat)</p>
                        </Link>
                        <Link to="/profile" style={{ color: "#222" }}>
                           <p>(Profile)</p>
                        </Link>
                     </div>
                     <img src={myapp2} className="avatar" alt="" />
                     <div className="main-header__updates">
                        <Upload />
                     </div>
                  </div>
                  <br />
                  <div className="main-cards">
                     <div className="card">
                        <h2 style={{ color: "#222" }}>
                           Welcome to your dashboard
                        </h2>
                        <img src={reatime2} className="reatime2" alt="" />
                        <User />
                     </div>
                     <div className="card">
                        <h2>Update/Change Your Info</h2>
                        <h4>(Required fields must be filled!)</h4>
                     </div>
                     <div className="formcontainer">
                        <div className={classes.container}>
                           <TextField
                              required
                              label="username: "
                              name="username"
                              variant="filled"
                              //defaultValue={localStorage.getItem("username")}
                              value={users.username}
                              onChange={handleChange}
                           />
                           <TextField
                              required
                              label="email: "
                              name="email"
                              variant="filled"
                              //defaultValue={localStorage.getItem("email")}
                              value={users.email}
                              onChange={handleChange}
                           />
                           <TextField
                              required
                              label="first name: "
                              name="first_name"
                              variant="filled"
                              //defaultValue={localStorage.getItem("first_name")}
                              value={users.first_name}
                              onChange={handleChange}
                           />
                           <TextField
                              required
                              label="last name: "
                              name="last_name"
                              variant="filled"
                              //defaultValue={localStorage.getItem("last_name")}
                              value={users.last_name}
                              onChange={handleChange}
                           />
                           <br />
                           <TextField
                              label="Company: "
                              name="company"
                              variant="filled"
                              value={users.company}
                              onChange={handleChange}
                           />
                           <TextField
                              label="Yrs Experience: "
                              name="dev_experience"
                              variant="filled"
                              value={users.dev_experience}
                              onChange={handleChange}
                           />
                           <TextField
                              label="Yrs Education: "
                              name="dev_education"
                              variant="filled"
                              value={users.dev_education}
                              onChange={handleChange}
                           />
                           <br />
                           <Button
                              variant="contained"
                              color="primary"
                              type="submit"
                              onClick={onSubmit}
                           >
                              Update Profile
                           </Button>
                        </div>
                     </div>
                  </div>
               </main>
               <aside className="sidenav">
                  <ul className="sidenav__list">
                     <Link to="/home">
                        <li className="sidenav__list-item">Dashboard</li>
                     </Link>
                     <Link to="/profile">
                        <li className="sidenav__list-item">Profile</li>
                     </Link>
                     <Link to="/chat">
                        <li className="sidenav__list-item">Chat</li>
                     </Link>
                     <Link to="/marketplace">
                        <li className="sidenav__list-item">Marketplace</li>
                     </Link>
                     {/* <Link to="/">
                        <li className="sidenav__list-item">Homepage</li>
                     </Link> */}
                  </ul>
               </aside>
            </div>
         </>
      );
   }
};
export default Dashboard;
