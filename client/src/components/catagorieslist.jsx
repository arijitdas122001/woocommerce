import React from 'react'
import styled from "styled-components";
import { mobile } from '../Responsive';
import { Link } from "react-router-dom";
const Container=styled.div`
flex:1;
margin:0 4px;
height: 70vh;
position:relative;
`;
const  Image=styled.img`
width: 100%;
height: 100%;
border-radius: 20px;
${mobile({width:"60%"})}
`
const  Infocont=styled.div`
position:absolute;
top:0;
bottom: 0;
height: 100%;
width:100%;
display:flex;
justify-content: center;
align-items:center;
flex-direction:column;
`;
const  Title=styled.h2`
color:white;
font-weight:300;
font-size: 30px;
`
const  Button=styled.button`
cursor:pointer;
padding:4px 4px;
border-radius: 4px;
border: none;
&:hover{
  background-color:grey;
  color:white;
  transform: scale(1.1);
}
`
const Catagorieslist = ({item}) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
      <Image src={item.img}>
      </Image>
      <Infocont>
        <Title>{item.title}</Title>
        <Button>Explore</Button>
      </Infocont>
      </Link>
    </Container>
  )
}

export default Catagorieslist
