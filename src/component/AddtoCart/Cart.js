import React, { useState } from "react";
import styled from "styled-components";
import { connect, useDispatch } from "react-redux";
import CartItems from "./CartP";
import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { URL } from "../Constant/Constant";
import { setProductId } from "../../redux/actions/ProductActions";
// import Confirmation from "../CheckOut/Confirmation";

const Container = styled.div`
  display: flex;
  // flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  // height: 1528px;
  // width: 901px;
  left: 301.2568359375px;
  top: 0px;
  border-radius: 0px;
  // background: lightpink;
`;
const Wrapper = styled.div``;
const CartSummary = styled.div`
  height: 211px;
  width: 251px;
  left: 0px;
  top: 203px;
  gap: 30px;
  padding: 10px;
  border-radius: 0px;
  //background : cyan;
`;
const CartTitle = styled.h3`
  display: flex;
  align-items: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  color: #151515;
  height: 10px;
`;
const Span = styled.p`
  width: 251px;
  height: 16px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 10px;
  color: slateblack;
  padding: 0px;
`;
const SummaryPrice = styled.div`
  display: flex;
  flex-direction: column;
`;
const CheckOut = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  gap: 6px;
  width: 165px;
  height: 41px;
  background: royalblue;
  cursor: pointer;
  border: 2px solid blue;
  border-radius: 12px;
  color: white;
`;

const Cart = ({ cart }) => {

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const dispatch = useDispatch();
  
  useEffect(() => {
    let items = 0;
    let Price = 0;
    cart.forEach((item) => {
      items += item.qty;
      Price += item.qty * item.mrp;
    });
    setTotalItems(items);
    setTotalPrice(Price);
  }, [cart, totalItems, totalPrice, setTotalItems, setTotalPrice]);

  let userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const proceedToCheckout = async (items, user) => {
    let result = await fetch(`${URL}/catalog/checkout`, {
      method: "POST",
      body: JSON.stringify({ user, items }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    const resultId  = result._id;
    dispatch(setProductId(resultId));
  };

  return (
    <Container>
      <Wrapper>
        {cart.map((item ,i) => (
          <CartItems  key={i} itemData={item} />
        ))}
      </Wrapper>
      <CartSummary>
        <CartTitle>Cart Summary</CartTitle>
        <SummaryPrice>
          <Span> Total Items : {totalItems} </Span>
          <Span>Rs. {totalPrice}</Span>
        </SummaryPrice>
        <Link style={{ textDecoration: "none" }} to="/CheckOut">
          <CheckOut onClick={() => proceedToCheckout(cart, userInfo.data.id)}>
            Proceed to Checkout
          </CheckOut>
          
        </Link>
        <Outlet />
      </CartSummary>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
