import React from "react";
import styled from "styled-components";
import FedEx from "../../image/FedEx.png";
import Dhl from "../../image/Dhl.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 670px;
  height: 197px;
  `;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 32px;
  position: relative;
  width: 670px;
  height: 197px;
`;
const Heading = styled.div`
  width: 670px;
  height: 53px;
`;
const Title = styled.div`
  display : flex
  width: 116px;
  height: 33px;
  left: 0px;
  top: 0px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  color: #151515;
`;
const Instruction = styled.div`
display : flex
  width: 160px;
  height: 16px;
  left: 0px;
  top: 37px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color : #A9A9A9;
`;
const Step1 = styled.div`
  position: absolute;
  width: 60.01px;
  height: 16px;
  right: 0px;
  top: 37px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: right;
`;
const BillingChoice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  width: 670px;
  height: 112px;
`;
const FedX = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 670px;
  height: 48px;
  background: #f9f9f9;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
`;
const Text = styled.div`
  // width: 42px;
  height: 16px;
  left: 56px;
  top: 15px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #151515;
`;
const FedXL = styled.div`
  width: 82px;
  height: 24px;
  left: 16px;
  top: 12px;
  gap: 18px;
  padding: 9px;
  display: flex;
  flex: 1;
  align-items: center;
`;

const FedXR = styled.div`
  display: flex;
  flex: 1;
  padding: 18px;
  justify-content: right;
`;
const FedXC = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  width: 168px;
  height: 18px;
  left: 200px;
  top: 15px;
`;
const FedXText = styled.div`
  height: 18px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
`;
const Image = styled.img``;
export default function BillingMethod() {
  return (
    <Container>
      <Wrapper>
        <Heading>
          <Title>Billing Method</Title>
          <Instruction>Please enter your payment method</Instruction>
          <Step1>Step 2 of 5</Step1>
        </Heading>
        <BillingChoice>
          <FedX>
            <FedXL>
              <input type="radio" />
              <Text>FedEx</Text>
            </FedXL>
            <FedXC>
              <FedXText style={{ color: "yellowgreen" }}> Rs. +10</FedXText>
              <FedXText>Additional price</FedXText>
            </FedXC>
            <FedXR>
              <Image src={FedEx} />
            </FedXR>
          </FedX>
          <FedX>
            <FedXL>
              <input type="radio" />
              <Text>DHL</Text>
            </FedXL>
            <FedXC>
              <FedXText style={{ color: "yellowgreen" }}> Rs. +10</FedXText>
              <FedXText>Additional price</FedXText>
            </FedXC>
            <FedXR>
              <Image src={Dhl} />
            </FedXR>
          </FedX>
        </BillingChoice>
      </Wrapper>
    </Container>
  );
}
