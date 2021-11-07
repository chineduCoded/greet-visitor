import React from 'react'
import Header from './Header'
import WhoIsWatching from './WhoIsWatching'
import styled from 'styled-components'

const HomeScreen = () => {
	return(
		<Container>
		  <Wrapper>
		        <Header />
			<WhoIsWatching />
		  </Wrapper>
		</Container>
	)
}

export default HomeScreen

const Wrapper = styled.div``

const Container = styled.div`
`
