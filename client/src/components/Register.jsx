import React, { useState } from 'react'
import styled from "styled-components";
import { Signup } from '../Redux/apicalls_redux';
import { useDispatch } from 'react-redux';
const Container=styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
background-size:cover;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
`;
const Wrapper=styled.div`
padding: 20px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;
const Title=styled.h1`
font-size: 40px;
font-weight: 400;
`
const Form=styled.form`
display:flex;
flex-wrap: wrap;
`;
const Input=styled.input`
margin :20px 10px 0px 0px;
padding:15px 15px;
border-radius: 5px;
border:2px solid teal;
outline: none;
`;
const Consent=styled.div`
margin-bottom:4px;
font-size: 20px;
`;
const Button=styled.button`
padding: 10px 10px;
background-color:teal;
color: white;
border: none;
border-radius: 4px;

&:hover{
  opacity: 0.8;
}
`;
const Error=styled.span`
  color: red;
`;
const Register = () => {
  const [user,setuser]=useState("");
  const [password,setpassword]=useState("");
  const [email,setemail]=useState("");
  const [cp,setcp]=useState("");
  let dispatch=useDispatch();
  const handleclick=(e)=>{
    e.preventDefault();
    Signup(dispatch,user,password,email);
  }
  return (
    <Container>
    <Wrapper>
      <Title>Create An Account</Title>
        <Form>
            <Input placeholder='Your Name(UserName)' onChange={(event)=>{setuser(event.target.value)}}/>
            <Input placeholder='E-Mail' onChange={(event)=>{setemail(event.target.value)}}/>
            <Input placeholder='Password' type='password' onChange={(event)=>{setpassword(event.target.value)}}/>
            <Input placeholder='Confirm Password' type='password' name='cp' onChange={(e)=>{setcp(e.target.value)}}/>
        </Form>
        <Consent>
          By Clicking Your are accepting our <b>Terms & Conditions</b> and <b>Security & Privacy Policy</b>
        </Consent>
        {password===cp?
        <Button onClick={handleclick} >Create Account</Button>
        :<Error>Please Confirm Your Password correctly</Error>
}
    </Wrapper>
    </Container>
  )
}

export default Register
