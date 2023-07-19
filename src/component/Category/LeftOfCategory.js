import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { BrandNames, categoryNames } from "../data";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 48px;
height: 939px;
width: 270px;
left: 0px;
top: 0px;
border-radius: 0px;
`
const Box1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 268px;
  height: 155px;
`;
const Heading = styled.div`
  width: 268px;
  height: 27px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #151515;
`;
const SubHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;

  width: 268px;
  height: 112px;
`;
const List = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;

  width: 268px;
  height: 112px;
`;
const CategoriesNames = styled.div`
  width: 268px;
  height: 19px;
`;
const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 8px;
  gap: 10px;
  width: 38px;
  height: 18px;
  right: 0px;
  top: 1px;
  background: #f4f8ec;
  border-radius: 12px;
`;
const Box2 = styled.div`
  width: 251px;
  height: 211px;
  flex: none;
  align-self: flex-start;
  flex-grow: 0;
`;
const Box3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 268px;
  height: 211px;
`;
const List1 = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;

  width: 268px;
  height: 30px;
`;
const Box4 = styled.div`
  width: 251px;
  height: 218px;
`;
const ButtonBox = styled.div`
  width: 251px;
  height: 70 px;
  display: flex;
  gap: 10px;
  // justify-content: space-between;
`;
const Button = styled.button`
  display: flex;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  gap: 6px;
  width: 70px;
  height: 40px;
  left: 0px;
  bottom: 0px;
  border: 2px solid #46760a;
  border-radius: 12px;
  cursor: pointer;
`;
const Reset = styled.button`
  display: flex;
  // box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  gap: 6px;
  width: 70px;
  height: 40px;
  left: 0px;
  bottom: 0px;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
  cursor: pointer;
`;
const MinMax = styled.div`
  width: 251px;
  height: 70px;
  padding: 10px;
  align-items: center;
  display: flex;
  flex: 1;
  gap: 10px;
  justify-content: space-between;
`;
const Min = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Input = styled.input`
  box-sizing: border-box;
  height: 42px;
  width: 67px;
  left: 0px;
  top: 18px;
  border-radius: 12px;
  background: #f9f9f9;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
`;
const Max = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
const Slider = styled.div``;

export default function LeftOfCategory() {
    const [value, onChange] = useState(1);
  useEffect(() => {
    const ele = document.querySelector(".buble1");
    if (ele) {
      ele.style.left = `${Number(value / 4)}px`;
    }
  });
  return (
    <Container>
        <Box1>
            <Heading>Categories</Heading>
            <SubHeading>
              {categoryNames.map((item, i) => {
                return (
                  <List key={i}>
                    <CategoriesNames>{item.category}</CategoriesNames>
                    <Box>{item.quantity}</Box>
                  </List>
                );
              })}
            </SubHeading>
          </Box1>
          <Box2>
            <Heading>Brand</Heading>
            <SubHeading>
              {BrandNames.map((item ,i) => {
                return (
                  <List key={i}>
                    <input type="checkbox" />
                    <CategoriesNames>{item.brand}</CategoriesNames>
                  </List>
                );
              })}
            </SubHeading>
          </Box2>
          <Box3>
            <Heading>Rating</Heading>
            <List1>
              <input type="checkbox" />
              <StarOutlinedIcon style={{ color: "yellow" }} />
              <StarOutlinedIcon style={{ color: "yellow" }} />
              <StarOutlinedIcon style={{ color: "yellow" }} />
              <StarOutlinedIcon style={{ color: "yellow" }} />
              <StarOutlinedIcon style={{ color: "yellow" }} />
            </List1>
            <List1>
              <input type="checkbox" />
              <StarOutlinedIcon style={{ color: "yellow" }} />
              <StarOutlinedIcon style={{ color: "yellow" }} />
              <StarOutlinedIcon style={{ color: "yellow" }} />
              <StarOutlinedIcon style={{ color: "yellow" }} />
              <StarBorderOutlinedIcon />
            </List1>
            <List1>
              <input type="checkbox" />
              <StarOutlinedIcon style={{ color: "yellow" }} />
              <StarOutlinedIcon style={{ color: "yellow" }} />
              <StarOutlinedIcon style={{ color: "yellow" }} />
              <StarBorderOutlinedIcon />
              <StarBorderOutlinedIcon />
            </List1>
            <List1>
              <input type="checkbox" />
              <StarOutlinedIcon style={{ color: "yellow" }} />
              <StarOutlinedIcon style={{ color: "yellow" }} />
              <StarBorderOutlinedIcon />
              <StarBorderOutlinedIcon />
              <StarBorderOutlinedIcon />
            </List1>
            <List1>
              <input type="checkbox" />
              <StarOutlinedIcon style={{ color: "yellow" }} />
              <StarBorderOutlinedIcon />
              <StarBorderOutlinedIcon />
              <StarBorderOutlinedIcon />
              <StarBorderOutlinedIcon />
            </List1>
          </Box3>
          <Box4>
            <Heading>Price</Heading>
            <Slider>
              <div className="slider-parent">
                <input
                  type="range"
                  min="1"
                  max="1000"
                  value={value}
                  onChange={({ target: { value: radius } }) => {
                    onChange(radius);
                  }}
                />
              </div>
              <MinMax>
                <Min>
                  Min
                  <Input placeholder="0"></Input>
                </Min>

                <Max>
                  Max
                  <Input placeholder="1000"></Input>
                </Max>
              </MinMax>
            </Slider>

            <ButtonBox>
              <Button>Apply</Button>
              <Reset>Reset</Reset>
            </ButtonBox>
          </Box4>
      
    </Container>
  )
}
