import React from 'react'
import styled from 'styled-components'


export const Home = () => {
   return(
     <Container>
       <h1>Home</h1>
     </Container>
   )
}

export const About = () => {
   return(
     <Container>
       <h1>About</h1>
     </Container>
   )
}


export const Contact = () => {
   return(
     <Container>
       <h1>Contact</h1>
     </Container>
   )
}

export const SignIn = () => {
   return(
     <Container>
       <h1>Sign In</h1>
     </Container>
   )
}

export const SignUp = () => {
   return(
     <Container>
       <h1>Sign Up</h1>
     </Container>
   )
}


const Container = styled.div`
width: 100%;
height: 90vh;
display: flex;
align-items: center;
justify-content: center;
`;
