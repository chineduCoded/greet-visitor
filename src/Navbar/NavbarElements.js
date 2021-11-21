import { NavLink as Links } from 'react-router-dom'
import styled from 'styled-components'
import { FaMagento } from 'react-icons/fa'


export const NavIcon = styled(FaMagento)`
margin-right: 0.5rem;
`

export const NavLogo = styled(Links)`
margin-left: 24px;
display: flex;
align-items: center;
justify-self: flex-start;
text-decoration: none;
text-transform: uppercase;
font-size: 1.8rem;
color: #fff;

span {
color: teal;
font-size: 1.5rem;
}
&:hover {
cursor: pointer;
}
`

export const Nav = styled.div`
background: #000;
height: 80px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0.5rem calc((100vw - 1000px) / 2);
z-index: 10;
`;

export const NavLink = styled(Links)`
color: #fff;
text-decoration: none;
text-transform: uppercase;
display: flex;
align-items: center;
height: 100%;
cursor: pointer;
padding: 0 1rem;

@media screen and (max-width: 768px) {
text-align: center;
padding: 1rem;
margin: 15px 0;

}

&.active &:hover {
color: #15cdfc;
}
`;

export const Bars = styled.div`
display: none;

@media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    height: 40px;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    color: #fff;
    cursor: pointer;
    font-size: 1.8rem;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;

/* middle nav
margin-right: -24px;*/

margin-right: 24px;
justify-self: flex-end;



@media screen and (max-width: 768px) {
     display: flex;
     flex-direction: column;
     position: absolute;
     margin: 10px 0;
     width: 100%;
     height: 90vh;
     top: 80px;
     left: ${({click}) => (click ? "0":"-100%")};
     opacity: 1;
     transition: all 0.35s ease;
     background: #000;
}
`;

export const NavBtn = styled.div`
display: flex;
align-items: center;
margin-right: 10px;

@media screen and (max-width: 768px) {
display: flex;
align-items: center;
}
`;

export const NavBtnLink = styled(Links)`
border-radius: 4px;
font-weight: bold;
background: #256ce1;
color: #fff;
text-decoration: none;
padding: 10px 22px;
outline: none;
border: 0;
cursor: pointer;
transition: all 0.2s ease-in-out;

&:hover {
transition: all 0.2s ease-in-out;
background: #fff;
color: #010606;
}
`;
