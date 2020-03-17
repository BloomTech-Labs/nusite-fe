import React from 'react';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import MenuBar from './MenuBar';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Header = () => {
    return (
    <>
    <header>
    <h1>PartNerd <LaptopMacIcon /></h1>
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/home">Dashboard</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
    </nav>
    {/*<button className="start"><NavLink to="/register">Start Now</NavLink></button>*/}
    <MenuBar />
    </header>
    </>
    )
};
 
export default Header;