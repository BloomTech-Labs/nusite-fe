import React, { useState, useEffect } from "react";
import Card from "./Card";
import Card2 from "./Card2";
import Card3 from "./Card3";
import { Link } from "react-router-dom";

export const Marketplace: React.FC = (props: any) => {
   const [name, setName] = useState("");

   useEffect(() => {
      let username = localStorage.getItem("username");
      if (username) {
         setName(username);
      }
   }, []);

   return (
      <>
         <div className="grid-container">
            <header className="header">
               <div className="header__search">
                  <i className="fa fa-search" aria-hidden="true">
                     {/* <h4> Search... </h4> */}
                  </i>
               </div>
            </header>
            <main className="main">
               <h1 className="marketplace">
                  Welcome to the Marketplace {/*  {name} */}
               </h1>
               <div className="marketplace">
                  <Card />
                  <br />
                  <Card2 />
                  <br />
                  <Card3 />
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
};

export default Marketplace;
