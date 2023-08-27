import React from 'react'
import styled from "styled-components";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { mobile } from '../Responsive';
const Container=styled.div`
height: 60vh;
background-color: #ecec9a;
display: flex;
justify-content:center;
align-items: center;
flex-direction:column;
`;
const Title=styled.h1`
font-size: 70px;
font-weight:500;
margin-bottom: 3px;
${mobile({fontSize:"20px",marginBottom:"0"})}
`;
const Description=styled.h4`
font-size:200;
${mobile({width:"30%"})}
`;
const InputCont=styled.div`
height:40px;
width:50%;
background-color: white;
display: flex;
align-items: center;
justify-content: space-between;
`;
const Input=styled.input`
height: 39px;
flex:8;
padding:0 8px;
font-weight: 500;
`;
const Button=styled.button`
height: 40px;
flex:1;
background-color:teal;
border: none;
cursor: pointer;
&:hover{
  background-color:grey;
}
`;
const LogIn = () => {
  return (
    <Container>
      <Title>One Step For Your Ease</Title>
      <Description>Enter Your Email so that we can send you Lates Deals,Sale and many more</Description>
      <InputCont>
      <Input placeHolder="Enter Your Email"/>
      <Button>
      <SendOutlinedIcon/>
      </Button>
      </InputCont>
    </Container>
  )
}

export default LogIn
