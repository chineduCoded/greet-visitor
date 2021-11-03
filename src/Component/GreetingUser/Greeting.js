import React from 'react'
import styled from 'styled-components'

const Greeting = () => {
	const date = new Date()
	const hour = date.getHours()
	return(
		<Container>
		   <Wrapper>
		    <GreetHolder>
		    {
		     hour>=12 ? hour>=16 ? 
		<H>Good Evening,  <span>Elijah</span></H> : 
		<H>Good Afternoon, <span>Elijah</span></H>: 
		<H>Good Morning, <span>Elijah</span> </H>
		    }
		    </GreetHolder>
		   </Wrapper>
		</Container>
	)
}
export default Greeting

const H = styled.h2`
color: teal;

span{                                              color: coral;                                     margin: 0 8px;                                    font-size: 20px;                                  font-weight: bold;
`

const GreetHolder = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 100vh;
}
`

const Wrapper = styled.div`
`

const Container = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
background-color: #e0e0e0;
color: #fff;
`
