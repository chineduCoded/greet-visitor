import React, { useState } from 'react'
import {FaBars, FaTimes } from 'react-icons/fa'
import {
	Container,
	Wrapper,
	NavLogo,
	NavIcon,
	Nav,
	NavLinks,
	NavBtn,
	NavBtnLink,
	Bars

} from './MenuStyle'
export const Menubar  = ({clr}) => {
 const [click, setClick] = useState(false)
 const handleClick = () => setClick(!click)
 const closeClick = () => setClick(false)
 return(
  <Container>
    <Wrapper>
      <NavLogo to="/">
	 <NavIcon />
	 <span clr={clr}>Eli</span>
	 <span>Codes</span>
      </NavLogo>
      <Bars onClick={handleClick}>
	 {click ? <FaTimes />:<FaBars />}
      </Bars>
      <Nav onClick={handleClick} click={click}>
	 <NavLinks to="/">Home</NavLinks>
	 <NavLinks to="about">About</NavLinks>
	 <NavLinks to="contact">Contact</NavLinks>
	 <NavLinks to="logout">Register</NavLinks>
	 <NavBtn>
	   <NavBtnLink to="login">SignIn</NavBtnLink>
	 </NavBtn>
      </Nav>
    </Wrapper>
  </Container>
 )
}
