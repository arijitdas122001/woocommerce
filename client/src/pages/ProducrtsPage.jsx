import React, { useState } from 'react'
import styled from "styled-components";
import Product from '../components/Product'
import {useLocation} from 'react-router-dom'
const Filtercont=styled.div`
display: flex;
justify-content: space-between;
`;
const Filter=styled.div`
margin: 20px;
`;
const FilterText=styled.span`
    font-size: 20px;
`;
const Selectsec=styled.select`
margin-right:4px;
padding: 4px 4px;
`;
const Options=styled.option``;
const ProducrtsPage = () => {
  let location=useLocation();
  location=location.pathname.split('/')[2];
  const [filters,setfilters]=useState({});
  const [sort,setsort]=useState("Newest");
  const handaleChange=(e)=>{
    const value=e.target.value;
    setfilters({...filters,[e.target.name]:value});
  }
  console.log(filters);
  console.log(sort);
  return (
    <div>
      <Filtercont>
        <Filter>
        <FilterText>Filter Your choice: </FilterText>
        <Selectsec name='color' onChange={handaleChange}>
            <Options disabled selected>color</Options>
            <Options>yellow</Options>
            <Options>red</Options>
            <Options>pink</Options>
            <Options>black</Options>
            <Options>white</Options>
        </Selectsec>
        <Selectsec name='size' onChange={handaleChange}>
            <Options disabled selected>Size</Options>
            <Options>S</Options>
            <Options>M</Options>
            <Options>L</Options>
            <Options>XL</Options>
            <Options>XXL</Options>
        </Selectsec>
        </Filter>
        <Filter>
        <FilterText>Sort Products By: </FilterText>
        <Selectsec onChange={(e)=>{setsort(e.target.value)}}>
            <Options value="Newest">Newest</Options>
            <Options value="h2l">Price(High - Low)</Options>
            <Options value="l2h">Price (Low - Hight)</Options>
        </Selectsec>
        </Filter>
      </Filtercont>
      <Product filters={filters} sort={sort} cat={location}/>
    </div>
  )
}

export default ProducrtsPage;
