import React from 'react'
import styled from 'styled-components'
import { MdAddCircleOutline } from 'react-icons/md'


const WhoIsWatching = () => {
 return(
  <Container>
   <Wrapper>
     <CardHolder>
	 <Text>Who's Watching</Text>
	<CardWrapper>
	 <Card>
	  <Image>Images</Image>
	   <NameHolder>Elijah</NameHolder>
	 </Card>
	 <Card>
          <Image>Images</Image>
           <NameHolder>Elina</NameHolder>
         </Card>
	 <Card>
          <Image>Images</Image>
           <NameHolder>Ebuka</NameHolder>
         </Card>
	 <Card>
          <Icon>
	 <span><MdAddCircleOutline /></span>
	 </Icon>
           <NameHolder>Profile</NameHolder>
         </Card>
	</CardWrapper>
     </CardHolder>
   </Wrapper>
  </Container>)
}

export default WhoIsWatching

const Icon = styled.div`
width: 100px;
height: 100px;
border-radius: 5px;
border: 1px solid gray;
margin: 10px 0;
text-align: center;
color: #fff;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
transistion: alk 350ms
transform: scal(1);

:hover{
cursor: pointer;
transform: scale(0.97);
}
`

const NameHolder = styled.div`
color: #fff;
font-weight: bold;
text-align: center;
`

const Image = styled.div`
width: 100px;
height: 100px;
border-radius: 5px;
background-color: red;
color: white;
margin: 10px 0;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
transition: all 350ms;
tranform: scale(1);

:hover{
transform: scale(0.97);
cursor: pointer;
}
`

const Card = styled.div`
width: 80px;
height: 150px;
margin: 0 25px;
display: flex;
align-items: center;
flex-direction: column;

span{
font-size: 40px;
text-align: center;
}
`

const Text = styled.h2`
text-align: center;
margin-bottom: 25px;
`

const CardWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
`

const CardHolder = styled.div`
width: 300px;
height: 350px;
display: flex;
align-items: center;
flex-direction: column;
`

const Wrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
padding-top: 130px;
`

const Container = styled.div`
width: 100%;
height: 100vh;
background-color: black;
color: #fff;
`
