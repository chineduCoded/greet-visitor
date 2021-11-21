import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import styled from 'styled-components'

export const ProgressBar = ({file, setFile}) => {
   const {progress, url} = useStorage(file)

   useEffect(() => {
     if(url){
      setFile(null)
     }
   }, [url, setFile])
  
   return (
    <Progress style={{ width: progress + '%' }}></Progress>
   )
};

const Progress = styled.div`
height: 5px;
background: #011834;
margin-top: 20px;
border-radius: 3px;
`;
