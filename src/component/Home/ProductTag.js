import React from "react";
import styled from "styled-components";
import { product } from "./data";

const Container = styled.div`
  display: flex;
  flex: 1;
  width: 1084px;
  height: 111px;
  flex-direction: column;
  padding: 0px 0px 0px 45px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const Box = styled.div`
  display: flex;
  align-items: left;
  padding: 6px 16px;
  width: 92px;
  height: 18px;
   background: #f5f5f5;
  border-radius: 12px;
  justify-content: space-between;
  cursor: pointer;
`;
const Product =styled.div`
display : flex ;

gap : 10px;
justify-content: space-between;
flex-wrap : wrap;

`

export default function ProductTag() {
  return (
    <Container>
      <Title>Product Tags</Title>
      <Product>
      {product.map((item) => {
        return <Box>{item.tag}</Box>;
      })}
      </Product>
    </Container>
  );
}
