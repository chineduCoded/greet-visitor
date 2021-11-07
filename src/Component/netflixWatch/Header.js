import React from 'react'
import styled from 'styled-components'
import { MdModeEdit } from 'react-icons/md'
import img from './img/Netflix.png'

const Header = () => {
  return(
    <Container>
	<Wrapper>
	  <Logo src={img}/>
	  <Icon></Icon>
	</Wrapper>
    </Container>
  )
}

export default Header

const Icon = styled(MdModeEdit)`
color: #fff;
margin-right: 15px;
font-size: 25px;
`

const Logo = styled.img`
width: 300px;
height: 130px;
object-fit: contain;
color: #e50914;
display: flex;
justify-content: center;
flex: 1;
`

const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
flex-direction: row;
`

const Container = styled.div`
width: 100%;
height: 80px;
background-color: black;
color: #fff;
position: fixed;
`
