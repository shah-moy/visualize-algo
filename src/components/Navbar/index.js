import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { IconContext } from 'react-icons/lib';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';


const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = ()=> {
      if(window.scrollY >= 80) {
          setScrollNav(true)
      } else {
          setScrollNav(false)
      }
  }

  useEffect(() => {
      window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
     scroll.scrollToTop();
  };


    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>VisualizeAlgo</NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to='algorithm' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Algorithm</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='contactus' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact Us</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='signup' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sign Up</NavLinks>
                </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    );
};

export default Navbar
