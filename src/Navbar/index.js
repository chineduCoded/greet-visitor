import React, { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import {
   Nav,
   NavLink,
   Bars,
   NavMenu,
   NavBtn,
   NavBtnLink,
   NavLogo,
   NavIcon
} from './NavbarElements'

const Navbar = () => {
 const [click, setClick] = useState(false)
 const handleClick = () => setClick(!click)
 const closeBars = () => setClick(false)
 return(
  <>
   <Nav>
     <NavLogo to='/'>
	<NavIcon />
	<span>EliCodes</span>
     </NavLogo>
     <Bars onClick={handleClick}>
	 {click ? <FaTimes />:<FaBars /> }
     </Bars>
     <NavMenu click={click}>
	 <NavLink to='/'  onClick={closeBars}activeStyle>
	   Home
	 </NavLink>
	<NavLink to='about' onClick={closeBars} activeStyle>
          About
        </NavLink>

	<NavLink to='contact' onClick={closeBars}  activeStyle>
           Contact
        </NavLink>

	<NavLink to='login' onClick={closeBars} activeStyle>
          Sign In
        </NavLink>
     <NavBtn>
	 <NavBtnLink to='logout' onClick={closeBars} >Sign Up</NavBtnLink>
     </NavBtn>
    </NavMenu>
   </Nav>
  </>
 )
}
export default Navbar
