import React from 'react'
import styled from "styled-components";
const Container=styled.div`
background-color:teal;
font-size: 20px;
font-weight: 500;
display: flex;
justify-content: center;
align-items: center;
`;
const Announcement = () => {
  return (
    <Container>
      HurrUp..The Sale is Live!!!
    </Container>
  )
}

export default Announcement
