import React from 'react'
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useNavigate } from 'react-router-dom';
import {mobile} from '../Responsive'
import { useSelector,useDispatch } from 'react-redux';
import { logout } from '../Redux/UserRedux';
const Container = styled.div`

/* background-color: red; */
${mobile({height:"50px"})}
`;
const Wrapper=styled.div`
height: 20px;
 padding:10px 20px;
 display:flex;
 justify-content:space-between;
 align-items: center;
 background-color: #e4efb3;
 ${mobile({padding:"0px 0px"})}
`;
const Left=styled.div`
flex:1;
display: flex;
margin-left:4px;
${mobile({flex:"0"})}
`;
const Middle=styled.div`
flex:1;
display:flex;
align-items: center;
justify-content: center;
${mobile({flex:"0"})}
`;
const Right=styled.div`
flex:1;
display:flex;
justify-content: flex-end;
${mobile({justifyContent:"center",flex:"3"})}
`;
const Language=styled.span`
cursor:pointer;
${mobile({display:"none"})}
`;
const Serachcontainer=styled.div`
display:flex;
align-items:center;
justify-content: center;
border:1px solid black;
margin-left:12px;
background-color: white;
`;
const Input=styled.input`
border:none;
outline:none;
${mobile({width:"50px"})}
`;
const Heading=styled.h2`
  color: darkblue;
  cursor: pointer;
`;
const Menuitem=styled.div`
margin-left:5px;
cursor: pointer;
font-weight: 500;
background-color: #caaf6f;
height: 30px;
width: 80px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 6px;
${mobile({backgroundColor:"transparent",marginLeft:"1px",justifyContent:"flex-start"})}
&:hover{
  background-color: #e1cb99;
  color: black;
  cursor: pointer;
}
`;
const UserProfile=styled.img`
height: 30px;
width:40px;
margin-left: 2px;
&:hover{
  cursor: pointer;
}
`;
const Navbar = () => {
  const red=useNavigate();
  const dispatch=useDispatch();
  const quantity=useSelector(state=>state.cart.quantity);
  let user=useSelector(state=>state.user.currentUser);
  // console.log(quantity)
  const handleClick=()=>{
      dispatch(logout(null));
      // console.log(user);
  }
  return (
    <Container>
      <Wrapper>
        <Left>
         <Language>
          Eng
         </Language>
         <Serachcontainer>
          <Input>
          </Input>
          <SearchIcon style={{color:"gray"}}/>
         </Serachcontainer>
        </Left>
        <Middle>
        <Heading onClick={()=>{red("/")}}>ShopCo.</Heading>
        </Middle>
        <Right>
          {user?
          <Menuitem onClick={handleClick}>Log Out</Menuitem>:
          <Menuitem onClick={()=>{red("/sign-up")}}>SignUp</Menuitem>
          }
          {user?
          <UserProfile src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1693078952~exp=1693079552~hmac=467f2085c055a7a46eb9bc2d2326f42b88cc531d1016e187231a443d93656aaf"/>:
          <Menuitem onClick={()=>{red("/log-in")}}>Log In</Menuitem>
          }
          <Menuitem>
          <Stack spacing={2} direction="row">
      <Badge badgeContent={quantity} color="secondary">
      <ShoppingCartCheckoutIcon onClick={()=>red("/Cart")}/>
      </Badge>
    </Stack></Menuitem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
