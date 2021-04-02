import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-scroll';
import OnScreenScrolling from '../on-screen-scrolling/on-screen-scrolling.component';
import Wrapper from '../wrapper/wrapper.component';

const NavbarStyled = styled.div`
  
  .header {
    color: white;
    background: black;
    display: flex;
    justify-content: space-around;
    margin: 0;
    font-size: 24px;
    font-family: 'Chicle';
    padding: 20px;
    position: fixed;
    width: 100%;
    * {
      cursor: pointer;
    }
    a:hover,
    a:active,
    .active {
      color: red;
    }
  }
  .scrolling-buttons {
    display: flex;
    flex-direction: column;
  }
  
`;

export default function Navbar() {
  return (
    <NavbarStyled>
      <div className="header">
        <Link activeClass="active" to="cover" spy={true} smooth={true} duration={1000}>
          Cover
        </Link>
        <Link activeClass="active" to="songs" spy={true} smooth={true} duration={1000}>
          Songs
        </Link>
        <Link activeClass="active" to="cast" spy={true} smooth={true} duration={1000}>
          Cast
        </Link>
        <Link activeClass="active" to="crew" spy={true} smooth={true} duration={1000}>
          Crew
        </Link>
        <Link activeClass="active" to="profiles" spy={true} smooth={true} duration={1000}>
          Profiles
        </Link>
        <Link activeClass="active" to="acknowledgements" spy={true} smooth={true} duration={1000}>
          Acknowledgements
        </Link>
      </div>
      {/* <div className="scrolling-buttons">
        <Wrapper>
          <OnScreenScrolling />
        </Wrapper>
      </div> */}
    </NavbarStyled>
  );
}
