import React from 'react';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
    return (
    <>
    <header>
    <h1>PartNerd <LaptopMacIcon /></h1>
    <nav>
        <a href="https://partnerd.dev">Home</a>
        <a href="https://partnerd.dev">Developers</a>
        <a href="https://partnerd.dev">Login</a>
        <a href="https://partnerd.dev">Register</a>
    </nav>
    <button className="start">Start Now</button>
    <MenuIcon className="menu" />
    </header>
    </>
    )
};
 
export default Header;