import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 670px;
  height: 215px;
`
const Wrapper4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  position: relative;
  width: 670px;
  height: 215px;
`;

const OrderNotes = styled.div`
  width: 670px;
  height: 130px;
`;
const InputNotes = styled.textarea`
  box-sizing: border-box;
  height: 112px;
  width: 670px;
  left: 0px;
  top: 18px;
  border-radius: 12px;
  background: #f9f9f9;
  border: 1px solid #d1d1d1;
  justify-content: flex-start;
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

export default function AdditionalInfo() {
  return (
    <Container>
      <Wrapper4>
            <Heading>
              <Title>Adiitional Informations</Title>
              <Instruction>
                Need something else? We will make it for you!
              </Instruction>
              <Step1>Step 4 of 5</Step1>
            </Heading>
            <OrderNotes>
              <Text>Order notes</Text>
              <InputNotes placeholder="Need a specific delivery day? Sending a gitf? Let's say ..." />
            </OrderNotes>
          </Wrapper4>
      
    </Container>
  )
}
