import React from 'react'
import {
   Nav,
   NavLink,
   Bars,
   NavMenu,
   NavBtn,
   NavBtnLink
} from './NavbarElements'

const Navbar = () => {
 return(
  <>
   <Nav>
     <NavLink to='/'  activeStyle>
	<h1> Logo</h1>
     </NavLink>
     <Bars />
     <NavMenu>
	 <NavLink to='/'  activeStyle>
	   Home
	 </NavLink>
	<NavLink to='about'  activeStyle>
          About
        </NavLink>

	<NavLink to='contact'  activeStyle>
           Contact
        </NavLink>

	<NavLink to='login'  activeStyle>
          Sign In
        </NavLink>
     </NavMenu>
     <NavBtn>
	 <NavBtnLink to='logout' >Sign Up</NavBtnLink>
     </NavBtn>
   </Nav>
  </>
 )
}
export default Navbar
