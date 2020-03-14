import React from 'react';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import MenuBar from './MenuBar';

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
    <MenuBar />
    </header>
    </>
    )
};
 
export default Header;