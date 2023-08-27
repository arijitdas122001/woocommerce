import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { login } from '../Redux/apicalls_redux';
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
const Button=styled.button`
padding: 10px 10px;
margin: 7px 0;
background-color:teal;
color: white;
border: none;
border-radius: 4px;
&:hover{
  opacity: 0.8;
}
`;
const Links=styled.a`
margin: 7px 0;
text-decoration:underline;
cursor: pointer;
`;
const ERROR=styled.span`
  color:red;
`;
const Loginto = () => {
  const [user,setuser]=useState("");
  const [password,setpassword]=useState("");
  const dispatch=useDispatch();
  let {isFetching,Error}=useSelector(state=>state.user)
  const handleclick=(e)=>{
    e.preventDefault();
    login(dispatch,user,password);
  }
  return (
    <Container>
      <Wrapper>
      <Title>Create An Account</Title>
        <Form>
            <Input placeholder='Your Name(UserName)' onChange={(e)=>{setuser(e.target.value)}} />
            <Input placeholder='Password' type="password" onChange={(e)=>{setpassword(e.target.value)}}/>
        </Form>
        <Button onClick={handleclick} disabled={isFetching===true?true:false}>Log In</Button>
        {Error && <ERROR>Something Went Wrong</ERROR>}
        <Links>Forgot Password?</Links>
        <Links>Create New Accoung</Links>
    </Wrapper>
    </Container>
  )
}

export default Loginto
