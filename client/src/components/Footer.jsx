import React from 'react'
import styled from "styled-components";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import MailIcon from '@mui/icons-material/Mail';
import { mobile } from '../Responsive';
const Container=styled.div`
background-color: pink;
display: flex;
${mobile({flexDirection:"column"})}
`;
const Left=styled.div`
display: flex;
flex-direction: column;
flex: 1;
align-items: center;
${mobile({width:"80%",justifyContent:"center"})}
`;
const Logo=styled.h1`
font-weight: 500;
font-size: 50px;
`;
const Desc=styled.div`
margin: 20px 0px;
`;
const SocialCont=styled.div`
display: flex;
`;
const Sicons=styled.div`
margin: 9px;
background-color:#${(props)=>props.color};
border-radius: 50%;
height: 40px;
width: 40px;
display: flex;
align-items: center;
justify-content: center;
`;
const Center=styled.div`
flex:1;
${mobile({width:"80%",justifyContent:"center"})}
`;
const Title=styled.h1`
font-weight: 500;
font-size: 50px;
`;
const List=styled.ul`
display: flex;
flex-wrap: wrap;
`;
const ListItem=styled.li`
margin: 5px 5px;
list-style: none;
width: 40%;
cursor: pointer;
&:hover{
  color:darkblue;
  font-weight: 500;
}
`;
const Right=styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
${mobile({width:"80%",justifyContent:"center"})}
`;
const ContactItem=styled.div`
display: flex;
align-items: center;
cursor: pointer;
`;
const Payment=styled.img`
margin-top: 2px;
`;
const Footer = () => {
  return (  
    <Container>
      <Left>
        <Logo>ShopCo.</Logo>
        <Desc>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia repellat nostrum eveniet, dolor laboriosam odit porro eos aliquam blanditiis quos dolore magnam doloremque ratione debitis, ipsa reiciendis dolores fuga omnis.
        </Desc>
        <SocialCont>
            <Sicons color="1DA1F2">
            <TwitterIcon/>
            </Sicons>
            <Sicons color="E1306C">
            <InstagramIcon/>
            </Sicons>
            <Sicons color="4267B2">
            <FacebookIcon/>
            </Sicons>
            <Sicons color="808080">
            <GitHubIcon/>
            </Sicons>
        </SocialCont>
      </Left>
      <Center>
        <Title>Important Links</Title>
        <List>
        <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Help</ListItem>
          <ListItem>Terms & Conditions</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact & Payments</Title>
        <ContactItem>
          <AddIcCallIcon style={{marginRight:"10px"}}/> +91 6295455828
        </ContactItem>
        <ContactItem>
        <AddLocationAltIcon style={{marginRight:"10px"}}/> Burdwan,WestBengal
        </ContactItem>
        <ContactItem>
        <MailIcon style={{marginRight:"10px"}}/> arijitd1211@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  )
}

export default Footer
