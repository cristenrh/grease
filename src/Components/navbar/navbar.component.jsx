import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-scroll';
import './navbar.css';
import OnScreenScrolling from '../on-screen-scrolling/on-screen-scrolling.component';

import { FontAwesomeIcon as MenuIcon } from '@fortawesome/react-fontawesome';
import { FontAwesomeIcon as CloseMenu } from '@fortawesome/react-fontawesome';


import { useState } from "react";

import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const NavbarStyled = styled.div`
  
  }
  .scrolling-buttons {
    display: flex;
    flex-direction: column;
  }
  
`;


export default function Navbar() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {setClick(false); console.log("click")};


  return (
    <NavbarStyled>
      <div className="header">
      <div className="navbar-brand">
          <a href="/">
            Grease
          </a> 
      </div>
      <ul className={click ? "nav-options open" : "nav-options" } >
        <li className="option">
        <Link activeClass="active" to="cover" spy={true} smooth={true} duration={1000} onClick={closeMobileMenu}>
        Cover
        </Link>
        </li>
          <li className="option">
        <Link activeClass="active" to="songs" spy={true} smooth={true} duration={1000}  onClick={closeMobileMenu}>
          Songs
          </Link>
        </li>
        <li className="option">
        <Link activeClass="active" to="cast" spy={true} smooth={true} duration={1000}  onClick={closeMobileMenu}>
          Cast
          </Link>
        </li>
        <li className="option" >
        <Link activeClass="active" to="crew" spy={true} smooth={true} duration={1000} onClick={closeMobileMenu}>
          Crew
          </Link>
        </li>
        <li className="option">
        <Link activeClass="active" to="profiles" spy={true} smooth={true} duration={1000}  onClick={closeMobileMenu}>
          Profiles
          </Link>
        </li>
        <li className="option">
        <Link activeClass="active" to="acknowledgements" spy={true} smooth={true} duration={1000}  onClick={closeMobileMenu}>
          Acknowledgements
        </Link>
        </li>
        </ul>
        <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" icon={ faTimes } />
        ) : (
          <MenuIcon className="menu-icon" icon={ faBars } />
        )}
      </div>
      </div>
     
    </NavbarStyled>
  );
}
