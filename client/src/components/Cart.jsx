import { Add, Remove } from "@mui/icons-material";
import React from "react";
import { useState,useEffect } from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
const Container = styled.div``;
const Wrapper = styled.div`
  ${mobile({ display: "flex", flexDirection: "column" })}
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ flexDirection: "column" })}
`;
const Title = styled.h1`
  font-size: 40px;
  font-weight: 400;
`;
const TopItem = styled.button`
  padding: 10px 10px;
  border-radius: 5px;
  border: ${(props) => (props.type === "filled" ? "none" : "1px solid black")};
  background-color: ${(props) => (props.type === "filled" ? "black" : "grey")};
  color: white;
  cursor: pointer;
  margin: 0 4px;
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  margin: 0 5px;
  cursor: pointer;
`;
const Bottom = styled.div`
  display: flex;
  margin: 10px 5px;
  ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 2;
`;
const Product = styled.div`
  border: 1px solid darkblue;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  margin: 4px 0;
`;
const ProductDetails = styled.div`
  display: flex;
`;
const Image = styled.img`
  width: 20%;
`;
const Details = styled.span`
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  align-items: center;
  justify-content: space-around;
  font-size: 20px;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  background-color: ${(props) => props.col};
  height: 25px;
  width: 25px;
  border-radius: 50%;
`;
const ProductSize = styled.span``;
const PriceDetails = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0px 10px;
`;
const ProductAmount = styled.span`
  display: flex;
  align-items: center;
  font-size: 20px;
`;
const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 500;
`;
const Summary = styled.div`
  flex: 1;
  border: 1px solid darkblue;
  border-radius: 10px;
  margin: 0px 4px;
  padding: 20px;
  height: 50vh;
`;
const SumTitle = styled.h2`
  font-weight: 400;
`;
const SummaryItem = styled.div`
  margin: 20px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "20px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const SumButton = styled.button`
  padding: 10px 10px;
  background-color: teal;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
const key=process.env.STRIPE_KEY;
const Cart = () => {
  const Cart = useSelector((state) => state.cart);
  const [Token,SetToken]=useState(null);
  const onToken=(token)=>{
    SetToken(token);
    // console.log(token);
  }
  useEffect(()=>{
    const MakeRequest=async(e)=>{
      try {
        const response = await fetch("https://woocommerce-mocha-nine.vercel.app/api/chekout/pay", {
          method: "POST", // or 'PUT'
          tokenId:Token._id
        });
    
        const result = await response.json();
        console.log("Success:", result);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    MakeRequest()
},[Token])
  return (
    <Container>
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopItem>Continue Shopping</TopItem>
          <TopTexts>
            <TopText>See ur wishlist(0)</TopText>
            <TopText>Your Bag(0)</TopText>
          </TopTexts>
          <TopItem type="filled">Add to WishList</TopItem>
        </Top>
        <Bottom>
          <Info>
            {Cart.products.map((prod) => (
              <Product>
                <ProductDetails>
                  <Image src={prod.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b>
                      {prod.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b>
                      {prod._id}
                    </ProductId>
                    <ProductColor col={prod.color} />
                    <ProductSize>
                      <b>Size:</b>
                      {prod.size}
                    </ProductSize>
                  </Details>
                </ProductDetails>
                <PriceDetails>
                  <ProductAmount>
                    <Add />
                    {prod.quantity}
                    <Remove />
                  </ProductAmount>
                  <ProductPrice>{prod.price * prod.quantity}</ProductPrice>
                </PriceDetails>
              </Product>
            ))}
          </Info>
          <Summary>
            <SumTitle>Your Order Summary</SumTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>{Cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>10%</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>{Cart.total + 5.9}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="Ecommerce"
              image="https://img.freepik.com/free-vector/payment-information-concept-illustration_114360-4064.jpg?w=740&t=st=1692691534~exp=1692692134~hmac=509096f247477080dea7babc97af7610cd1f3f1c88c0f8f6aae6fc404c63f889"
              amount={(Cart.total+5.9)*100}
              currency="inr"
              stripeKey={key}
              token={onToken}
            >
              <SumButton>Continue To Buy</SumButton>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;
