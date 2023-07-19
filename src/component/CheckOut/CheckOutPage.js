import React from "react";
import styled from "styled-components";
import AdditionalInfo from "./AdditionalInfo";
import BillingInfo from "./BillingInfo";
import BillingMethod from "./BillingMethod";
import Cart from "./Cart";
import Confirmation from "./Confirmation";
import PaymentMethod from "./PaymentMethod";

const Container = styled.div`
  display: flex;
  // align-items: center;
  padding: 16px 45px;
  gap: 32px;
  width: 1260px;
  // height: 2066px;
  background: #ffffff;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 64px;
  width: 670px;
  // height: 2034px;
  background: white;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  // position : relative;
  padding: 0px;
  gap: 32px;
  top: 0%;
  width: 468px;
  // height: 800px;
  background: white;
`;

export default function CheckOutPage() {
  return (
    <Container>
      <Left>
        <BillingInfo />
        <BillingMethod/>       
        <PaymentMethod />
        <AdditionalInfo />
        <Confirmation />
      </Left>
      <Right>
        <Cart/>
      </Right>
    </Container>
  );
}
