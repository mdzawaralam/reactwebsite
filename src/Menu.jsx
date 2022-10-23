import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () =>{
    return (
        <h1>
            <NavLink  to="/">About Us</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
        </h1>
    );
};

export default Menu;