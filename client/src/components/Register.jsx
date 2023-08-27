import React from 'react'
import styled from "styled-components";
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

const Register = () => {
  return (
    <Container>
    <Wrapper>
      <Title>Create An Account</Title>
        <Form>
            <Input placeholder='Your Name(UserName)'/>
            <Input placeholder='E-Mail'/>
            <Input placeholder='Ph-No'/>
            <Input placeholder='Password'/>
            <Input placeholder='Confirm Password'/>
        </Form>
        <Consent>
          By Clicking Your are accepting our <b>Terms & Conditions</b> and <b>Security & Privacy Policy</b>
        </Consent>
        <Button>Create Account</Button>
    </Wrapper>
    </Container>
  )
}

export default Register
