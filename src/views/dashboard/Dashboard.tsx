import React, { useState, useEffect } from "react";
import "./DashboardChat.css";
import { useMutation } from "@apollo/react-hooks";
import User from "./User";
import Button from "@material-ui/core/Button";
import { UPDATE_USER } from "../../graphql-requests/mutations";
import TextField from "@material-ui/core/TextField";
//import { makeStyles } from "@material-ui/core/styles";
import { getUserId } from "../util/useLocalStorage";
import Upload from "./Upload";
import reatime2 from "../../images/reatime2.svg";
import { Link } from "react-router-dom";

// const useStyles = makeStyles(theme => ({
//    container: {
//       display: "flex",
//       flexFlow: "column",
//       flexWrap: "wrap",
//       width: "100%",
//       justifyContent: "center",
//       alignItems: "center",
//       fontSize: "1.2rem",
//       padding: "2rem",
//    },
//    textField: {
//       marginLeft: theme.spacing(1),
//       marginRight: theme.spacing(1),
//       width: 250,
//       alignItems: "left",
//       textAlign: "center",
//    },
//    button: {
//       margin: theme.spacing(1),
//    },
// }));

export const Dashboard: React.FC = (props: any) => {
   const [name, setName] = useState("");
   //const classes = useStyles();

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
               props.history.push("/home");
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
                        <h2>
                           Hi {name}, <br /> whats on your agenda today?
                        </h2>
                        <Link to="/chat" style={{ color: "#444" }}>
                           <p>(Chat)</p>
                        </Link>
                     </div>
                     <div className="main-header__updates">
                        <Upload />
                     </div>
                  </div>
                  <br />
                  <div data-testid="newdashboard" className="main-cards">
                     <div className="card">
                        <h1>Welcome to Your Dashboard {name}</h1>
                        <img src={reatime2} className="reatime2" alt="" />
                        <User />
                     </div>
                     <div className="card">
                        <h2>Update/Change Your Profile</h2>
                        <h5>(Empty fields won't update!)</h5>
                     </div>
                     <form className="card" onSubmit={onSubmit}>
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
                        <br />
                        <TextField
                           label="Company Name: "
                           name="company"
                           variant="filled"
                           value={users.company}
                           onChange={handleChange}
                        />
                        <TextField
                           label="Years Experience: "
                           name="dev_experience"
                           variant="filled"
                           value={users.dev_experience}
                           onChange={handleChange}
                        />
                        <TextField
                           label="Years Education: "
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
                     </form>
                  </div>
               </main>
               <aside className="sidenav">
                  <ul className="sidenav__list">
                     <Link to="/home">
                        <li className="sidenav__list-item">Dashboard</li>
                     </Link>
                     <Link to="/home">
                        <li className="sidenav__list-item">Profile</li>
                     </Link>
                     <Link to="/chat">
                        <li className="sidenav__list-item">Chat</li>
                     </Link>
                     {/* <Link to="/marketplace">
                        <li className="sidenav__list-item">Marketplace</li>
                     </Link> */}
                     <Link to="/">
                        <li className="sidenav__list-item">Homepage</li>
                     </Link>
                  </ul>
               </aside>
            </div>
         </>
      );
   }
};
export default Dashboard;
