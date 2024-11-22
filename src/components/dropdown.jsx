import React, { useState } from 'react';
import './dropdown.css';
import arrowimg from '../assets/images/icon-arrow-light.svg';

function NavDropdown({ dropdownTitle, dropdownItems,imgSrc= arrowimg }) {
  const [isOpen, setIsOpen] = useState(false); 
  const [isRotated, setIsRotated] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsRotated(!isRotated);
  };
  return (
    <div>
      <button className="nav_button" onClick={toggleDropdown}>
        {dropdownTitle}

        <img
        className="dropdown_arrow"
        src={imgSrc}
        style={{
          transform: isRotated ? 'rotate(180deg)' : 'none',
          marginLeft:'5px',
        }}
        alt="Dropdown Arrow"
      />
      </button>

      
      {isOpen && (
        <div className="nav_dropdown" 
        style={{
          display: isOpen ? 'flex' : 'none',
        }}>
          {dropdownItems.map((item, index) => (
            <a key={index} href="#"> 
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default NavDropdown;
