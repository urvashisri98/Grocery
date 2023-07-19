import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { product } from "./data";
// import ProductTag from "../component/ProductTag";

const Container = styled.div`
  display: flex;
  width: 1260px;
  height: 465px;
  padding: 44px 45px;
  gap: 48px;

  flex-direction: column;
`;
const Wrapper = styled.div`
  display: flex;
  flex: 1;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px 30px 0px 30px;
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px 30px 0px 30px;
`;
const Justify = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px 30px 0px 30px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px 30px 0px 30px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
  color: #6a983c;
`;
const Copyright = styled.div`
  width: 188px;
  height: 19px;

  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #151515;
`;

const ProductTag = styled.div`
  display: flex;
  flex: 1;
  width: 1084px;
  height: 161px;
  flex-direction: column;
  padding: 0px 0px 0px 45px;
`;
const Product = styled.div`
  display: flex;
  flex: 1;
  gap: 10px;
  flex-wrap: wrap;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 16px;
  width: 92px;
  height: 18px;
  background: #f5f5f5;
  border-radius: 12px;
  justify-content: space-between;
  cursor: pointer;
`;
const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Title> Get in touch</Title>
          <List>
            <ListItem>About Us</ListItem>
            <ListItem>Careers </ListItem>
            <ListItem>Press Release</ListItem>
            <ListItem>Blog</ListItem>
          </List>
        </Left>
        <Center>
          <Title> Connection</Title>
          <List>
            <ListItem>Facebook</ListItem>
            <ListItem>Twiiter</ListItem>
            <ListItem>Instagram</ListItem>
            <ListItem>Youtube</ListItem>
            <ListItem>Linkedin</ListItem>
          </List>
        </Center>
        <Justify>
          <Title>Earning</Title>
          <List>
            <ListItem>Become an Affilate</ListItem>
            <ListItem>Advertise your Product </ListItem>
            <ListItem>Sell on Market</ListItem>
          </List>
        </Justify>
        <Right>
          <Title> Account</Title>
          <List>
            <ListItem>Your Account</ListItem>
            <ListItem>Returns Centre</ListItem>
            <ListItem>100% purchase protection </ListItem>
            <ListItem><Link
              style={{ textDecoration: "none", color: "olivedrab" }}
              to="/About"
            >
              Chat with us
            </Link></ListItem>
            <ListItem>Help</ListItem>
          </List>
        </Right>
      </Wrapper>
      <ProductTag>
        <Title>Product Tags</Title>
        <Product>
          {product.map((item, i) => {
            return <Box key={i}>{item.tag}</Box>;
          })}
        </Product>
      </ProductTag>

      <Copyright>Copyright © 2022 demo.com</Copyright>
    </Container>
  );
};

export default Footer;
