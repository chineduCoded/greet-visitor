import styled from 'styled-components'
import { FaCode } from 'react-icons/fa'
import { NavLink as Links } from 'react-router-dom'

export const Bars = styled.div`
display: none;

@media screen and (max-width: 960px) {
display: flex;
align-items: center;
position: absolute;
top: 30px;
right: 0;
color: #fff;
margin-right: 24px;
font-size: 1.8rem;
transition: all 350ms ease;
}
`

export const NavBtnLink = styled(Links)`
outline: none;
border: 0;
border-radius: 3px;
padding: 10px 22px;
background: teal;
color: #fff;
text-transform: uppercase;
text-decoration: none;
`

export const NavBtn = styled.div`
margin-left: 10px;
`

export const NavLinks = styled(Links)`
margin: 0 10px;
text-transform: uppercase;
text-decoration: none;
color: #fff;

&.active {
cursor: pointer;
color: teal;

@media screen and (max-width: 960px) {
 margin: 15px 0;
 display: flex;
 align-items: center;
}
}
`

export const Nav = styled.div`
margin-right: 24px;
display: flex;
align-items: center;

@media screen and (max-width: 960px) {
display: flex;
align-items: center;
flex-direction: column;
width: 100%;
height: 90vh;
position: absolute;
top: 80px;
left: ${({click}) => (click ? "0":"-100%") };
background: #101522;
color: #fff;
}
`

export const NavIcon  = styled(FaCode)`
display: flex;
align-items: center;
font-size: 2rem;
margin-right: 10px;
color: #fff;
`

export const NavLogo = styled(Links)`
display: flex;
align-items: center;
margin-left: 24px;
text-decoration: none;
span{
display: flex;
align-items: center;
font-size: 1.3rem;
text-transform: uppercase;
color: #fff;

span{
color: ${({clr}) => (clr ? "coral":"teal")};
}
}
`

export const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`

export const Container = styled.div`
width: 100%;
height: 80px;
background: #101522;
color: #fff;
position: sticky;
padding: 0.5rem calc((100vw - 1000px) / 2);

`
