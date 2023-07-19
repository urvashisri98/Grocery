import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 45px;
  position: relative;
  width: 1260px;
  height: 80px;
  background: #ffffff;
`;
const Left = styled.div`
  display: flex;
  flex: 1;
  padding: 12px 16px;
  flex-direction: row;
`;
const Center = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  gap: 6px;
  width: 214px;
  height: 47px;
  left: calc(50% - 214px / 2 - 0.5px);
  top: 0px;
`;
const Button = styled.button`
  box-sizing: border-box;
  background: #6a983c;
  width: 214px;
  padding: 12px 16px;
  align-items: center;
  height: 47px;
  border: 2px solid #46760a;
  cursor: pointer;
  border-radius: 12px;
`;
const Text = styled.div`
  width: 160px;
  height: 23px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  color: #ffffff;
`;
const Right = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  gap: 10px;
  align-items: right;
`;
const Tag = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 8px;
  gap: 10px;

  width: 30px;
  height: 18px;

  /* C2/E */

  background: #f4f8ec;
  border-radius: 12px;
`;

export default function Pagination() {
  return (
    <Container>
      <Left>
        <Text style={{ color: "gray" }}>Pages: 1 2 3 4</Text>
      </Left>
      <Center>
        <Button style={{ color: "white" }}>Show more Product</Button>
      </Center>
      <Right>
        <Tag style={{ color: "yellowgreen" }}>336</Tag>
        <Text style={{ color: "gray" }}>Product</Text>
      </Right>
    </Container>
  );
}
