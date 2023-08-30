import React from 'react'
import styled from "styled-components";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { mobile } from '../Responsive';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useEffect,useState} from "react";
import { useDispatch } from 'react-redux';
import { addProduct } from '../Redux/CartRedux';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
// import { useSelector } from 'react-redux';
const Container=styled.div``;
const Wrapper=styled.div`
padding: 50px;
display: flex;
${mobile({flexDirection:"column",justifyContent:"center",alignItems:"center"})}
`;
const Imagecont=styled.div`
flex:1;
`;
const  Image=styled.img`
object-fit: cover;
`;
const Infocont=styled.div`
flex:1;
padding: 0px 5px;
display: flex;
flex-direction: column;
align-items: flex-start;
${mobile({justifyContent:"center",alignItems:"center"})}
`;
const Title=styled.h1`
font-weight: 300;
`;
const Desc=styled.div`
margin:20px 0px;
width: 90%;
`;
const Price=styled.span`
font-size: 40px;
`;
const FilterCont=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
`;
const SubTitle=styled.h4`
margin-left:0
`;
const SizePlatte=styled.div`
display: flex;
`;
const EachSize=styled.div`
margin:0px 15px ;
border:0.1px solid black;
border-radius: 50%;
width: 50px;
height: 50px;
font-weight: 400;
display: flex;
justify-content: center;
align-items: center;
&:hover{
  border:2px solid black;
  cursor: pointer;
}
`;
const ButtonCont=styled.div`
margin:20px;
display: flex;
&:hover{
  cursor: pointer;
}
`;
const AddtoShopbtn=styled.div`
padding: 10px 10px;
background-color:teal;
color: white;
border: none;
border-radius: 4px;
display: flex;
&:hover{
  opacity: 0.8;
}
`;
const WishListbtn=styled.div`
padding: 10px 10px;
outline-offset: 1cm;
margin-left: 20px;
border: 1px solid black;
border-radius: 4px;
display: flex;
`;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const BuyProduct =() => {
  let location=useLocation();
  let ID=location.pathname.split('/')[2];
  const [product,setproduct]=useState({});
  const [size,setSize]=useState("");
  const [quantity,setQuantity]=useState(1);
  useEffect(()=>{
    const fetchSingleProduct=async()=>{
      const res=await axios.get(`https://backend-api-ycs4.onrender.com/api/prod/getTheProduct/${ID}`);
      setproduct(res.data);
    }
    fetchSingleProduct();
  },[ID])
  const handleQuantity=(dir)=>{
    if(dir==="inc"){
      setQuantity(quantity+1);
    }
    else{
      quantity > 1 && setQuantity(quantity - 1);
    }
  };
  const handleSize=(sz)=>{
  setSize(sz);
};
 const dispatch=useDispatch();
const handleclick=()=>{
dispatch(
  addProduct({...product,quantity,size})
);
};
  return (
    <Container>
       <Wrapper>
        <Imagecont>
        <Image src={product.img}/>
        </Imagecont>
        <Infocont>
          <Title>{product.title}</Title>
          <Desc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
          iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
          tristique tortor pretium ut. Curabitur elit justo, consequat id
          condimentum ac, volutpat ornare.
          </Desc>
          <Price>{product.price}/-</Price>
        <FilterCont>
        <SubTitle>SELECT SIZE</SubTitle>
        <SizePlatte>
        {product.size?.map((s) => (
                  <EachSize key={s} onClick={()=>handleSize(s)}>{s}</EachSize>
        ))}
        </SizePlatte>
        </FilterCont>
        <ButtonCont>
        <AddtoShopbtn onClick={handleclick}><LocalGroceryStoreIcon/>Add To Shop</AddtoShopbtn>
        <WishListbtn><FavoriteBorderIcon/>Wishlist</WishListbtn>
        </ButtonCont>
        <AddContainer>
            <AmountContainer>
              <RemoveIcon onClick={()=>handleQuantity("dec")}/>
              <Amount>{quantity}</Amount>
              <AddIcon onClick={()=>handleQuantity("inc")}/>
            </AmountContainer>
          </AddContainer>
        </Infocont>
      </Wrapper>
    </Container>
  )
}
export default BuyProduct;

