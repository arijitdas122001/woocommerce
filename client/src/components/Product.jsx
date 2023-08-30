import React, { useEffect, useState } from 'react'
import styled from "styled-components";
// import { popularProducts } from '../data/items';
import Allproducts from './Allproducts';
import { mobile } from '../Responsive';
import axios from 'axios';
const Container=styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    ${mobile({flexDirection:"column"})}
`;
const Product = ({filters,sort,cat}) => {
  const [fetchedProducts,setFetchedProducts]=useState([]);
  const [filterdProducts,setfilterProducts]=useState([]);
  // console.log(filters,sort,cat);
  useEffect(()=>{
    const FetchAllData=async()=>{
      let res=await axios.get(
        cat?`https://backend-api-ycs4.onrender.com/api/prod/getAllProducts?category=${cat}`:
        "https://backend-api-ycs4.onrender.com/api/prod/getAllProducts");
      setFetchedProducts(res.data);
    }
    FetchAllData();
  },[cat])
  useEffect(()=>{
    cat && 
    setfilterProducts(
    fetchedProducts.filter((item)=>{
      return Object.entries(filters).every(([key,value])=>{
         return item[key].includes(value);
      })
    }))
  },[filters,cat,fetchedProducts])
  return (
    <Container>
      {filterdProducts.map((prod)=>{
        return <Allproducts prod={prod} key={prod._id}/>
      })}
    </Container>
  )
}

export default Product
