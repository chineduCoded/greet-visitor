import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { ProgressBar } from './ProgressBar'

export const UploadForm = () => {
   const [file, setFile] = useState(null)
   const [error, setError] = useState(null)

   const types = ['image/png', 'image/jpeg']

   const changeHandler = (e) => {
     const selected = e.target.files[0]

     if(selected && types.includes(selected.type) ) {
	setFile(selected)
	setError('')
     }else {
	setFile(null)
	setError("Please select an image file, png or jpeg")
     }
   }
   return (
   <Container>
    <Wrapper>
    <Form>
	<Label htmlFor="pics">Upload Image <span><AiOutlineCloudUpload /></span></Label>
	<Input type="file" onChange={changeHandler} id="pics" />
	<Output>
	   { error && <Error>{error}</Error> }
	   { file && <File>{file.name}</File> }
	   { file && <ProgressBar file={file} setFile={setFile} /> }
	</Output>
    </Form>
    </Wrapper>
   </Container>
   )
};

const Label = styled.label`
background-color: #011834;
color: #fff;
display: flex;
border-radius: 30px;
align-items: center;
justify-content: center;
text-align: center;
padding: 15px 25px;
cursor: pointer;
font-size: 20px;
font-weight: bold;

span {
margin-left: 10px;
color: #fff;
text-align: center;
display: flex;
align-items: center;
font-size: 20px;
font-weight: bold;
}
`;

const File = styled.div``;

const Output = styled.div`
margin-top: 15px;
font-size: 0.8rem;
`;

const Error = styled.div`
color: #ff4a4a;
`;

const Form = styled.form`
  width: 250px;
  display: flex:
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const Input = styled.input`
display: none;
`;

const Wrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

const Container = styled.div`
width: 100%;
`;
