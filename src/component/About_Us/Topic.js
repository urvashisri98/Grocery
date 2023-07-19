import React from "react";
import styled from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { blogcomments } from "../../data";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 48px 0px;
  gap: 32px;
  width: 1260px;
  height: 480px;
  // background: Lightblue;
  border-radius: 32px;
`;
const Topics = styled.div`
  width: 1260px;
  height: 46px;
  position: relative;
  background: white;
  // background:pink;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  
`;
const Relate = styled.div`
  //   position: absolute;
  width: 211px;
  height: 27px;
  left: 0px;
  top: calc(50% - 27px / 2 + 0.5px);
  font-family: 'system-ui';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 27px;
  padding: 0px 0px 0px 50px;
  // background:Lightblue;
`;

const Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  // padding: 50px 30px;
  gap: 8px;
  // position: absolute;
  width: 125px;
  height: 41px;
  // right: 0px;
  // top: 0px;
  font-weight: 600;
`;
const Arrow = styled.div`
  color: green;
  font-size: 18px;
  margin: 8px 0px 0px 0px;
`;
const Blog = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap:0px;
  
  width: 1172px;
  height: 316px;
`;
const Blog1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 0px 0px 50px;
  gap: 24px;
  background: white;
  // background: blue;
  width: 250px;
  height: 316px;
  
`;
const Imagecontainer = styled.div`
  // position: absolute;
  width: 269px;
  height: 180px;
  
`;
const Img = styled.img``;
const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
//   background:blue;
  width: 267px;
  height: 112px;
`;
const Tag = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px 8px;
gap: 10px;
font-weight:500;
width: 35px;
height: 45px;
color:green;
/* C2/E */

background: #F4F8EC;
border-radius: 12px;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  font-weight:700;
  width: 267px;
  height: 86px;
 
`;
const Authordata = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px;
  gap: 16px;
 
//   width: 116px;
  height: 16px;
`;
function Topic() {
  return (
    <Container>
      <Topics>
        <Relate>Related Topic</Relate>
        <Button>
          Button
          <Arrow>
            <ArrowForwardIosIcon />
          </Arrow>
        </Button>
      </Topics>
      <Blog>
        {blogcomments.map((item ,i) => {
          return (
            <Blog1 key={i}>
              <Imagecontainer><Img src={item.img}/></Imagecontainer>
              <Information>
                <Tag> {item.tag}</Tag>
                <Description>{item.Description}</Description>
                <Authordata>{item.Author}</Authordata>
              </Information>
            </Blog1>
          );
        })}
      </Blog>
    </Container>
  );
}

export default Topic;
