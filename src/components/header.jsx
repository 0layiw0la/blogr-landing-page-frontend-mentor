import React, { useState } from 'react';
import NavDropdown from './dropdown';
import Button from './button';
import logo from '../assets/images/logo.svg';
import './header.css';

function Header() {

    return (
        <nav id="nav">
            <img id="header_img" src={logo} />
            <NavDropdown 
            dropdownTitle = "Product"
            dropdownItems={[
                "Overview",
                "Pricing", 
                "Marketplace", 
                "Features", 
                "Integrations"]}
                />
            <NavDropdown 
            dropdownTitle = "Company"
            dropdownItems={[
                "About",
                "Team", 
                "Blog", 
                "Careers"
            ]}
                />
            <NavDropdown 
            dropdownTitle = "Connect"
            dropdownItems={[
                "Contact",
                "Newsletter", 
                "LinkedIn"
            ]}
                />
            <div className="right_nav">
                <a href="#">Login</a>
                <Button text='Sign Up'/>
            </div>
            
        </nav>
    )
}

export default Header;