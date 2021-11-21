import React, { useState, useEffect } from 'react'import styled from 'styled-components'
import axios from 'axios'   
import { useParams } from 'react-router-dom'

export const Movie  = () => {

const { id } = useParams()

const [data, setData] = useState([])
                                                  const apiCall = async () => {                      const url2 = "https://redux-movie-api.herokuapp.com/api/movies"                                    await axios.get(url2).then((url) => {                console.log(url.data[id])                            setData(url.data[id])                                                                                 });                                               };

useEffect(() => {                                    apiCall()                                      }, [])                                                                                               return(                                            <Container>
    <Wrapper>                                                 <Card>
          <Image src={data.image}/>
          <Text>{data.title}</Text>                      </Card>                                           ))}
     ))}                                             </Wrapper>                                        </Container>                                     )                                               }

const Image = styled.img`
background-color: coral;                          height: 70%;                                      width: 100%;                                      border-radius: 10px;                              display: flex;                                    align-items: center;                              `                                                                                                   const Text = styled.div`                          text-align: center;                               margin: 10px;                                     font-weight: bold;
`

const Card = styled.div`                          margin: 0 10px;                                   width: 350px;                                     height: 350px;                                    display: flex;                                    align-items: center;                              flex-direction: column;                           border-radius: 10px;                              border; 1px solid rgba(255, 255, 255, 0.2);       `                                                 
const Wrapper = styled.div`                       width: 100%;                                      display: flex;
justify-content: center;
align-items: center;                              padding-top: 50px;                                flex-wrap: wrap;                                  `

const Container = styled.div`                     width: 100%;                                      height: 100%;                                     min-height: 100vh;
`
