import React from "react";
import styled from "styled-components";
import { bgImage } from "../../data";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 23px;
  gap: 32px;
  width: 1200px;
  height: 430px;
 background: white;
`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px 0px 0px 40px;
  gap: 32px;
  position : absolute;
  width: 1190px;
  height: 480px;
  `;
const Img = styled.img``;
const Shade = styled.div`
  position: absolute;
  height: 383px;
  width: 1169px;
 left: 40px;
  top: 97px;
 border-radius: [object Object]px;

  background: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 40px;
  gap: 32px;
  // background:black;
  position: absolute;
  width: 769px;
  height: 385px;
  left: 201px;
  top: 32px;
  flex: 1;
//   background-color: rgba(0, 0, 0, 0.6);
`;
const Right = styled.div`
  width: 569px;
  height: 142px;
  flex: 3;
  font-family: "system-ui";
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 140%;
  /* or 45px */
  justify-content: flex-end;
  display: flex;
  color: #ffffff;
  padding: 0px 0px 0px 110px;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0px;
  gap: 12px;
  width: 168px;
  height: 84px;
`;
const Li = styled.div`
  justify-content: space-between;
  display: flex;
  flex: 1;
`;
const ListItem = styled.div`
  display: flex;
  color: white;
`;
function Frame() {
  return (
    <Container>
      <ImageContainer>
        {bgImage.map((item, i) => {
          return <Img key={i} src={item.img}/>;
        })}
        <Shade/>
        <TextContainer>
          <Left>
            <Li>
              <ListItem>Date:</ListItem>
              <ListItem>22.6.2021</ListItem>
            </Li>

            <Li>
              <ListItem>Category:</ListItem>
              <ListItem>Dinner</ListItem>
            </Li>

            <Li>
              <ListItem>Author:</ListItem>
              <ListItem>Admin</ListItem>
            </Li>
          </Left>
          <Right>
            Space for your heading, can be larger so don't worry-large heading
            looks better
          </Right>
        </TextContainer>
      </ImageContainer>
    </Container>
  );
}

export default Frame;
