import React from 'react';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import MenuBar from './MenuBar';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
    <>
    <header>
    <h1>PartNerd <LaptopMacIcon /></h1>
    <nav>
        <NavLink to="/">Home</NavLink>
        <a href="https://partnerd.dev">Developers</a>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
    </nav>
    <button className="start">Start Now</button>
    <MenuBar />
    </header>
    </>
    )
};
 
export default Header;