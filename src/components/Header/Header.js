import React from 'react';
import Navbar from './Navbar';
import header from '../../Images/header.jpg';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <img style={{width:'100%', height:'500px'}} src={header} alt="" />
        </div>
    );
};

export default Header;