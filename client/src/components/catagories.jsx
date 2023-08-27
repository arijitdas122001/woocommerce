import React from 'react'
import Catagorieslist from './catagorieslist'
import {categories} from '../data/items';
import styled from "styled-components";
import { mobile } from '../Responsive';
const Container=styled.div`
display: flex;
justify-content:space-around;
padding:2px 8px;
${mobile({flexDirection:"column"})}
`;
const Title=styled.h1`
font-size: 40px;
font-weight:100px;
${mobile({fontSize:"20px",marginTop:"30px"})}
`
const Catagories = () => {
  return (
    <div>
      <Title>Pick Your Latest Fashion Here</Title>
    <Container>
        {categories.map(item=>(
      <Catagorieslist item={item} key={item.id}/>
    ))}
    </Container>
    </div>
  )
}

export default Catagories
