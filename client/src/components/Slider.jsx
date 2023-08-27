import React, { useState } from 'react'
import styled from "styled-components";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { sliderItems } from '../data/items';
import { useNavigate } from 'react-router-dom';
import { mobile } from '../Responsive';
const Container=styled.div`
width:100%;
height: 90vh;
position: relative;
display: flex;
overflow: hidden;
background-color: #d3d398;
${mobile({display:"none"})}
`
const Arrow=styled.div`
height: 50px;
width: 50px;
    position: absolute;
    top:0;
    bottom: 0;
    cursor: pointer;
    left:${(props)=>props.dir==="left" && "60px"};
    right:${(props)=>props.dir==="right" && "10px"};
    margin: auto;
`;
const Wrapper=styled.div`
 height: 100%;
 display: flex;
 transform:translate(${(props)=>props.slideno * -100}vw);
`;
const Slide=styled.div`
width: 100vw;
height: 100vh;
display: flex;
`;
const ImageCont=styled.div`
flex:1;
width: 444px;
`;
const Img=styled.img`
height: 100%;
`;
const InfoCont=styled.div`
flex:1;
right:14px;
left:15px;
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
margin-right:100px;

`;
const Head=styled.h1`
font-size:40px;
font-weight:400;
`
const About=styled.p`
font-size:20px;
margin:10px 22px;
`;
const Button=styled.button`
border: 1px solid darkblue;
border-radius: 4px;
padding:4px 4px;
cursor:pointer;
&:hover{
  background-color:black;
  color: white;
}
`;
const Slider = () => {
const [state,setstate]=useState(0);
const handelclick=(direction)=>{
    if(direction==="left"){
        setstate(state>0 ? state - 1: 2 );
        console.log("clicked")
    }else{
        setstate(state<2?state+1:0);   
        console.log("clicked right"); 
    }
}
const red=useNavigate();
const redirect=(cat)=>{
  red(`/products/men`)
}
  return (
    <Container>
        <Wrapper slideno={state}>
            {sliderItems.map((item)=>(
          <Slide key={item.id}>
            <ImageCont>
                <Img src={item.img} alt="...."/>
            </ImageCont>
            <InfoCont>
                <Head>{item.title}</Head>
                <About>
                    {item.desc}
                </About>
                <Button onClick={redirect}>Shop Now</Button>
            </InfoCont>
         </Slide>
         ))}
        </Wrapper>
        <Arrow dir="left" onClick={()=>handelclick("left")}>
        <ArrowCircleLeftIcon style={{"fontSize":"45px"}}/>
      </Arrow>
        <Arrow dir="right" onClick={()=>handelclick("right")}>
        <ArrowCircleRightIcon style={{"fontSize":"45px"}}/>
      </Arrow>
    </Container>
  )
}

export default Slider
