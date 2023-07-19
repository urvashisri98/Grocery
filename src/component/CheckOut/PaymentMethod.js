import React from "react";
import styled from "styled-components";
import Bitcoin from "../../image/Bitcoin.png";
import PayPal from "../../image/PayPal.png";
import Visa from "../../image/VISA.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 670px;
  height: 453px;
  // background: lightskyblue;
`;
const Wrapper3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 0px;
  gap: 32px;
  width: 670px;
  height: 453px;
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
const Image = styled.img``;
const PaymentChoices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 670px;
  height: 368px;
`;
const CreditBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  width: 636px;
  height: 240px;
  background: #ffffff;

  border: 1px solid #d1d1d1;
  border-radius: 12px;
`;
const CreditCard = styled.div`
  width: 638px;
  height: 208px;
  position: relative;
`;
const CreditHeading = styled.div`
  width: 638px;
  height: 54px;
  left: 0px;
  top: 0px;
  box-sizing: border-box;
  display: flex;
  background: #f9f9f9;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
`;
const CreditCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 32px;
  position: absolute;
  // background: lawngreen;
  width: 638px;
  height: 152px;
  left: 0px;
  top: 56px;
`;
const CardNumber = styled.div`
  width: 638px;
  height: 60px;
`;
const InputDetails = styled.input`
  box-sizing: border-box;
  position: absolute;
  height: 42px;
  left: 0px;
  top: 18px;
  padding: 10px;
  border-radius: 12px;
  background: #f9f9f9;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
`;
const CardHolder = styled.div`
  position: absolute;
  width: 350px;
  height: 60px;
  left: 0px;
  top: 92px;
`;
const ExpireDate = styled.div`
  position: absolute;
  width: 120px;
  height: 60px;
  left: 382px;
  top: 92px;
`;
const Cvv = styled.div`
  position: absolute;
  width: 120px;
  height: 60px;
  left: 518px;
  top: 92px;
`;


export default function PaymentMethod() {
  return (
    <Container>
      <Wrapper3>
        <Heading>
          <Title>Payment Method</Title>
          <Instruction>Please enter your payment method</Instruction>
          <Step1>Step 3 of 5</Step1>
        </Heading>
        <PaymentChoices>
          <CreditBox>
            <CreditCard>
              <CreditHeading>
                <FedXL>
                  <input type="radio" />
                  <Text>Credit Card</Text>
                </FedXL>
                <FedXR>
                  <Image src={Visa} />
                </FedXR>
              </CreditHeading>
              <CreditCardDetails>
                <CardNumber>Card number</CardNumber>
                <InputDetails
                  type="text"
                  placeholder="Card Number"
                  style={{ width: 638 }}
                />
                <CardHolder>
                  <CardNumber>Card Holder</CardNumber>
                  <InputDetails
                    type="text"
                    placeholder="Card Holder"
                    style={{ width: 350 }}
                  />
                </CardHolder>
                <ExpireDate>
                  <CardNumber>Expiration Date</CardNumber>
                  <InputDetails
                    type="text"
                    placeholder="DD/MM/YY"
                    style={{ width: 120 }}
                  />
                </ExpireDate>
                <Cvv>
                  <CardNumber>CVV</CardNumber>
                  <InputDetails
                    type="text"
                    placeholder="CVC"
                    style={{ width: 120 }}
                  />
                </Cvv>
              </CreditCardDetails>
            </CreditCard>
          </CreditBox>
          <FedX>
            <FedXL>
              <input type="radio" />
              <Text>PayPal</Text>
            </FedXL>
            <FedXR>
              <Image src={PayPal} />
            </FedXR>
          </FedX>
          <FedX>
            <FedXL>
              <input type="radio" />
              <Text>BitCoin</Text>
            </FedXL>
            <FedXR>
              <Image src={Bitcoin} />
            </FedXR>
          </FedX>
        </PaymentChoices>
      </Wrapper3>
    </Container>
  );
}
