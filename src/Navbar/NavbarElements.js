import { FaBars } from 'react-icons/fa'
import { NavLink as Links } from 'react-router-dom'
import styled from 'styled-components'


export const Nav = styled.div`
background: #000;
height: 80px;
display: flex;
align-items: centet;
justify-content: space-between;
padding: 0.5rem calc((100vw - 1000px) / 2);
z-index: 10;
`;

export const NavLink = styled(Links)`
color: #fff;
text-decoration: none;
display: flex;
align-items: center;
height: 100%;
cursor: pointer;
padding: 0 1rem;

.active {
color: #15cdfc;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #fff;

@media screen and (max-width: 768px) {
    display: flex;
    align-ites: center;
    transform: translate(-100%, 75%);
    cursor: pointer;
    font-size: 1.8rem;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;



@media screen and (max-width: 768px) {
     display: none;
}
`;

export const NavBtn = styled.div`
display: flex;
align-items: center;
margin-right: 24px;


@media screen and (max-width: 768px) {
     display: none;
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

:hover {
transition: all 0.2s ease-in-out;
background: #fff;
color: #010606;
}
`;
