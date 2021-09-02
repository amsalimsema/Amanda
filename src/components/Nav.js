import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import logo from '../logo.svg'
import '../App.css'

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from './NavElements'
// import { Call, Envelope, Map } from './Contact'
// import { ConsultBtnMob} from './Global'

export default function NavTop() {
  // open and close drawer
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  // change bg
  const [MobileNav, setMobileNav] = useState(false)
  const changebackground = () => {
    if (window.scrollY >= 50) {
      setMobileNav(true)
    } else {
      setMobileNav(false)
    }
  }
  window.addEventListener('scroll', changebackground)

  return (
    <>
      <div className={MobileNav ? 'MobileNav active' : 'MobileNav'}>
        <IconContext.Provider value={{ color: '#885c44' }}>
          <Nav>
            <NavbarContainer>
              <NavLogo to="/" onClick={closeMobileMenu}>
                <img
                  src={logo}
                  alt="logo"
                  style={{ height: '60px', width: '60px' }}
                />
              </NavLogo>
              <MobileIcon onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
              </MobileIcon>

              <NavMenu onClick={handleClick} click={click}>
                {/* <NavItem>
                  <GenLink
                    to="/"
                    onClick={closeMobileMenu}
                    style={{ textDecoration: 'none' }}
                  >
                    HOME
                  </GenLink>
                </NavItem> */}
                <NavItem>
                  <NavLinks
                    href="/"
                    onClick={closeMobileMenu}
                    style={{ textDecoration: 'none' }}
                  >
                    <h6>INVESTMENTS</h6>
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    href="/"
                    onClick={closeMobileMenu}
                    style={{ textDecoration: 'none' }}
                  >
                    <h6>CONSULTING</h6>
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    href="/"
                    onClick={closeMobileMenu}
                    style={{ textDecoration: 'none' }}
                  >
                    <h6>SUSTAINABILITY</h6>
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    href="/"
                    onClick={closeMobileMenu}
                    style={{ textDecoration: 'none' }}
                  >
                    <h6>COMPANY</h6>
                  </NavLinks>
                </NavItem>
              </NavMenu>
            </NavbarContainer>
          </Nav>
        </IconContext.Provider>
      </div>
    </>
  )
}
