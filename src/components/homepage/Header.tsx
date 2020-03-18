import React, { useState } from "react";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import MenuBar from "./MenuBar";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../darkmode/contexts";

const Header = (props: any) => {
   const [darkMode, setDarkMode] = useState(false);
   const theme = {
      darkMode,
      // can even pass the setter function so children can
      // trigger changes
      setDarkMode,
   };

   return (
      <ThemeContext.Provider value={theme}>
         <header className={`App${theme.darkMode ? "_dark" : ""}`}>
            <h1>
               PartNerd <LaptopMacIcon />
            </h1>
            <nav>
               <NavLink to="/">Home</NavLink>
               <NavLink to="/home">Dashboard</NavLink>
               <NavLink to="/login">Login</NavLink>
               <NavLink to="/register">Register</NavLink>
            </nav>
            <MenuBar />
         </header>
      </ThemeContext.Provider>
   );
};

export default Header;
