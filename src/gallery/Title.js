import React from 'react';
import styled from 'styled-components';

export const Title = () => {
   return (
    <Container>
      <Heading1>Gallery</Heading1>
      <Heading2>Our Photos</Heading2>
      <Desc>Software Engineering 4th Cohort 2021</Desc>
    </Container>
   )
};


const Container = styled.div`
width: 100%;
max-width: 960px;
`;

const Heading1 = styled.h1`
  color: #011834;
  font-size: 1.2rem;
  letter-spacing: 2px;
  font-weight: normal;
  margin-left: 24px;
`;

const Heading2 = styled.h2`
text-align: center;
margin-top: 60px;
font-size: 2.6rem;
color: #011834;
`;

const Desc = styled.p`
text-align: center;
color: #011834;
`;
