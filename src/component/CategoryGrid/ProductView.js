import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { ProductGrid } from "../../component/data";
import { ImgURL, LengthOfCatalog, URL } from "../Constant/Constant";

const Container = styled.div`
  align-items: flex-start;
  padding: 20px;
  gap: 32px;
  height: 1528px;
  width: 901px;
  border-radius: 0px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
  height: 400px;
  width: 901px;
  flex-wrap: wrap;
  border-radius: 0px;
`;
const BoxContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 16px;
  width: 268px;
  height: 330px;
  background: #ffffff;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
`;
const ImageContainer = styled.div`
  width: 230px;
  height: 180px;
`;

const Image = styled.img`
  width: 90%;
  height: 90%;
  object-fit: cover;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 236px;
  height: 95px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

const Title = styled.div`
  width: 251px;
  height: 23px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  color: #151515;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Desc = styled.p`
  width: 251px;
  height: 16px;

  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #575757;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const Price = styled.div`
  width: 236px;
  height: 36px;
  // flex: none;
  order: 1;
  display: flex;
  position: relative;
  justify-content: space-between;
  flex-grow: 0;
`;
const Msp = styled.div`
  width: 35px;
  height: 18px;
  left: 0px;
  top: calc(50% - 18px / 2 + 13.5px);
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-decoration-line: line-through;
  color: #a9a9a9;
`;

const Box = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 6px;
  position: absolute;
  width: 90px;
  height: 36px;
  right: 0px;
  bottom: 0px;
  color: white;
  background: #6a983c;
  border: 2px solid #46760a;
  border-radius: 12px;
`;
export default function Product() {
  const [category, setCategory] = useState([]);

  const collectData = async () => {
    fetch(`${URL}/catalog`).then((result) => {
      result.json().then((resp) => {
        const arr = [null];
        for (var i = 0; i < LengthOfCatalog; i++) {
          arr[i] = resp.data[i];
        }
        setCategory(arr);
      });
    });
  };

  useEffect(() => {
    collectData();
  }, []);

  return (
    <Container>
      <Wrapper>
        {category.map((item, i) => {
          return (
            <BoxContainer key={i}>
              <ImageContainer>
                {/* <Image src={item.img} /> */}
                <Image src={ImgURL + item.thumbnail} />
              </ImageContainer>
              <Info>
                <Title> {item.productIdentifier}</Title>
                <Desc>{item.description}</Desc>
                <Price>
                  {item.mrp}
                  <Msp>{item.msp}</Msp>
                  <Box>Buy now</Box>
                </Price>
              </Info>
            </BoxContainer>
          );
        })}
      </Wrapper>
    </Container>
  );
}
