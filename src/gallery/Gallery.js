import React from 'react';
import styled from 'styled-components';
import useFirestore from '../hooks/useFirestore';


export const Gallery = () => {
 const { docs } = useFirestore("images")
 
  return (
   <Container>
	<Wrapper>
	  <ImageGrid>Images</ImageGrid>
	</Wrapper>
   </Container>
  )
};

const ImageGrid = styled.div``;

const Wrapper = styled.div``;

const Container = styled.div``;
