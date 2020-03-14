import React from 'react';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import MenuBar from './MenuBar';
import { NavLink, Link } from 'react-router-dom';


const Header = () => {
    return (
    <>
    <header>
    <h1>PartNerd <LaptopMacIcon /></h1>
    <nav>
        <NavLink to="/"><a href="#">Home</a></NavLink>
        <a href="https://partnerd.dev">Developers</a>
        <NavLink to="/login"><a href="#">Login</a></NavLink>
        <NavLink to="/register"><a href="#">Register</a></NavLink>
    </nav>
    <button className="start">Start Now</button>
    <MenuBar />
    </header>
    </>
    )
};
 
export default Header;