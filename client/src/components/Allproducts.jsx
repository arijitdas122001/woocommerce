
import React from 'react'
import styled from "styled-components";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';
import { mobile } from '../Responsive';
const Info=styled.div`
width: 100%;
height: 100%;
position: absolute;
top:0;
left:0;
background-color: rgba(0,0,0,0.2);
display:flex;
justify-content: center;
align-items: center;
opacity: 1;
z-index:3;
transition: all 1s ease;
`;
const Container=styled.div`
    flex: 1;
    min-width:260px;
    height: 350px;
    display: flex;
    align-items:center;
    justify-content: center;
    background-color: #f0f0d4;
    margin:5px;
    position: relative;

    &:hover ${Info}{
        opacity:1;
    }
    ${mobile({minWidth:"200px"})}
`;
const Circle=styled.div`
height: 300px;
width: 300px;
border-radius: 50%;
background-color:white;
position: absolute;
`;
const Image=styled.img`
height: 80%;
width:90%;
z-index:2;
`;
const Icon=styled.div`
width: 40px;
height: 40px;
background-color: white;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
margin:9px;
transform: all 0.5s ease;
&:hover{
    background-color:grey;
    transform: scale(1.1);
}
`;
const Allproducts = ({prod}) => {
  const red=useNavigate();
  const redirect=()=>{
    red(`/buyProduct/${prod._id}`);
  }
  return (
    <Container>
      <Circle/>
      <Image src={prod.img}/>
      <Info>
        <Icon onClick={redirect}>
        <AddShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
        <RemoveRedEyeOutlinedIcon />
        </Icon>
        <Icon>
            <FavoriteIcon/>
        </Icon>
      </Info>
    </Container>
  )
}

export default Allproducts
