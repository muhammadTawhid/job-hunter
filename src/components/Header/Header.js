import React from 'react';
import Navbar from './Navbar';
import header from '../../Images/header3.jpg';

const Header = () => {


    return (
        <div>
            <Navbar></Navbar>
            <img className="w-100 mb-3" src={header} alt="" />
        </div>
    );
};

export default Header;