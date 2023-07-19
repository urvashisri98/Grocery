import React from "react";
import styled from "styled-components";
import Header from "../component/Header";
import Filterbar from "../component/Filterbar";
import Cart from "../component/AddtoCart/Cart";
import Navbar from "../component/Blog/Navbar"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 1260px;
  // height: 2745px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
`;

export default function Addtocart() {
  return (
    <Container>
      <Header />
      <Filterbar />
      <Navbar/>
      <Cart/>
    </Container>
  );
}
