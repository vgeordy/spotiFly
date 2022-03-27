import React from 'react'
import { Nav, NavContainer, NavLogo, NavMenu, NavItem, NavLink } from './NavBarStyles';
import { animateScroll as scroll } from 'react-scroll';
const NavBar = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo to='/login' onClick={toggleHome}>
                        Spotifly
                    </NavLogo>
                    <NavMenu>
                        <NavItem>
                            <NavLink to='discover' spy={true} smooth={true} offset={50} duration={800}>Discover</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='about' spy={true} smooth={true} offset={50} duration={800}>About</NavLink>
                        </NavItem>
                        <NavLink to='contact' spy={true} smooth={true} offset={50} duration={800}>Contact</NavLink>
                    </NavMenu>
                </NavContainer>
            </Nav>

        </>
    )
}

export default NavBar;