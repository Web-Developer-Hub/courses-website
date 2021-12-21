import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav className='navbar'>
                <a href="/">Online Courses</a>
            </nav>
            <nav className='navbars'>
                <Link to='/home'>Home</Link>
                <Link to="/our/courses">Courses</Link>
                <Link to="/contact/todos">Contact Us</Link>
                <Link to="/about">About</Link>
            </nav>
        </div>
    );
};

export default Header;