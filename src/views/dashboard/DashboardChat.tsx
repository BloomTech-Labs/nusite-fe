import React, { useState, useEffect } from "react";
import "./DashboardChat.css";
import reatime2 from "../../images/reatime2.svg";
import { Link } from "react-router-dom";
import CustomChatbot from "../chat/CustomChatbot";
//import TextField from "@material-ui/core/TextField";
import User from "../dashboard/User";

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

export const DashboardChat: React.FC = (props: any) => {
   const [name, setName] = useState("");
   //const classes = useStyles();

   useEffect(() => {
      let username = localStorage.getItem("username");
      if (username) {
         setName(username);
      }
   }, []);

   return (
      <>
         <div className="grid-container">
            <main className="main">
               <div className="main-cards">
                  <div className="card">
                     <h1>Chat with us {name}</h1>
                     <div className="chat">
                        <br />
                        <CustomChatbot />
                     </div>
                  </div>
                  <div className="card">
                     <h2 className="chatcard">PartNerd Chat</h2>
                     <img src={reatime2} className="reatime2" alt="" />
                  </div>
                  <br />
                  <div className="chatprofile">
                     <User />
                  </div>
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
};

export default DashboardChat;
