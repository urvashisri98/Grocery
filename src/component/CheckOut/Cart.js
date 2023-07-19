import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
// import { cartProduct } from "../data";
import { connect } from "react-redux";
import { ImgURL } from "../Constant/Constant";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 32px 16px;
  gap: 10px;
  // position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  // background: lightcyan;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 40px;
  // background: cyan;
  width: 436px;
  // height: 736px;
`;
const Heading = styled.div`
  width: 436px;
  height: 53px;
  // background: lawngreen;
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

// Product Items
const ProductItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 32px;
  // background: lawngreen;
  width: 436px;
  // height: 372px;
`;
const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 436px;
  height: 170px;
`;
const Items = styled.div`
  width: 436px;
  height: 154px;
  position: relative;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  position: absolute;
  width: 100px;
  height: 143px;
  left: 0px;
  top: 0px;
  // position: relative;
`;
const ImgContainer = styled.div`
  height: 67px;
  width: 100px;
  // left: 0px;
  // top: 0px;
  // border-radius: 12px;
  // background: #f9f9f9;
`;
const Image = styled.img`
  width: 90%;
  height: 90%;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 70px;
  height: 64px;
`;
const IconsWithName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 6px;
  width: 62px;
  height: 16px;
`;
const IconsName = styled.div`
  width: 44px;
  height: 16px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #a9a9a9;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 40px;
  // background: aqua;
  position: absolute;
  height: 154px;
  left: 116px;
  right: 0px;
  top: 0px;
`;
const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  width: 251px;
  height: 69px;
  // background: orange;
  // position : relative;
`;
const ProductTitle = styled.div`
  width: 251px;
  height: 23px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  color: #151515;
`;
const TextDetails = styled.div`
  height: 19px;
  width: 170px;
  left: 0px;
  top: 27px;
  border-radius: 0px;
  display: flex;
  justify-content: space-between;
`;
const TextHeading = styled.div`
  width: 33px;
  height: 16px;
  left: 0px;
  top: 0px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #a9a9a9;
`;
const TextReply = styled.div`
  width: 85px;
  height: 16px;
  right: 92px;
  top: 0px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #151515;
`;
const List1 = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;

  width: 268px;
  height: 30px;
`;
const ProductPrice = styled.div`
  height: 45px;
  width: 320px;
  left: 0px;
  top: 109px;
  display: flex;
  border-radius: 0px;
  // background: orange;
`;
const Prices = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 91px;
  height: 45px;
  left: 665px;
  top: 32px;
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
const Pcs = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  gap: 6px;
  // position: absolute;
  width: 100px;
  height: 32px;
  right: 0px;
  top: calc(50% - 32px / 2);
  background: #f9f9f9;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
`;


const Line = styled.div`
  width: 436px;
  height: 0px;
  border: 1px solid #f9f9f9;
`;
//Pricing with charges

const Price = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  // position: relative;
  padding: 0px;
  gap: 32px;
  // background: lawngreen;
  width: 436px;
  height: 152px;
`;
const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 12px;

  width: 436px;
  height: 78px;
`;
const SubPrice = styled.div`
  // position: relative;
  display: flex;
  align-items: center;
  padding: 0px;
  gap: 0px;
  width: 436px;
  height: 18px;
  justify-content: space-between;
`;

const PriceHeading = styled.div`
  // position: absolute;
  width: 52px;
  height: 18px;
  left: 0px;
  bottom: 60px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #151515;
`;
const PriceValue = styled.div`
  // position: absolute;
  width: 60px;
  height: 18px;
  left: 376px;
  bottom: 60px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  text-align: right;
  color: #151515;
`;
const RedeemCode = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 42px;
  width: 436px;
  left: 0px;
  top: 0px;
  background: #ffffff;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
  position: relative;
`;
const Input = styled.input`
  // box-sizing: border-box;
  height: 36px;
  width: 436px;
  left: 0px;
  top: 0px;
  background: lavenderblush;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
`;
const Apply = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 12px;
  gap: 6px;
  position: absolute;
  width: 106px;
  height: 35px;
  right: 4px;
  top: 3px;
  background: lavenderblush;
  border: none;
  border-radius: 12px;
  cursor: pointer;
`;

// Total Cost

const TotalPrice = styled.div`
  width: 436px;
  height: 39px;
  // background: lawngreen;
  position: relative;
`;
const Summary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: absolute;
  width: 222px;
  height: 34px;
  left: 0px;
  top: 3px;
`;
const TextOrder = styled.div`
  width: 69px;
  height: 18px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #151515;
`;
const OrderPrice = styled.div`
  position: absolute;
  width: 133px;
  height: 39px;
  right: 0px;
  top: 0px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 39px;
  text-align: right;
  color: #6a983c;
`;

const Cart = ({ cart }) => {

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
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

  var today = new Date();
  
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
 

  return (
    <Container>
      <Wrapper>
        <Heading>
          <Title>Order Summary</Title>
          <Instruction>
            Price can change depending on shipping method and taxes of your
            state.
          </Instruction>
        </Heading>
        <ProductItems>
          {cart.map((item, i) => {
            return (
              <ItemsContainer key={i}>
                <Items>
                  <Left>
                    <ImgContainer>
                      {" "}
                      <Image src={ImgURL + item.thumbnail} />
                    </ImgContainer>
                    <Details>
                      <IconsWithName>
                        <FavoriteBorderIcon style={{ fontSize: 14 }} />
                        <IconsName>Wishlist</IconsName>
                      </IconsWithName>
                      <IconsWithName>
                        <BallotOutlinedIcon style={{ fontSize: 14 }} />
                        <IconsName>Compare</IconsName>
                      </IconsWithName>
                      <IconsWithName>
                        <ClearIcon style={{ fontSize: 14 }} />
                        <IconsName>Remove</IconsName>
                      </IconsWithName>
                    </Details>
                  </Left>
                  <Right>
                    <ProductDetails>
                      <ProductTitle>{item.productIdentifier}</ProductTitle>
                      <TextDetails>
                        <TextHeading>Brand:</TextHeading>
                        <TextReply>{item.brand}</TextReply>
                      </TextDetails>
                      <TextDetails>
                        <TextHeading>WeightUnit:</TextHeading>
                        <TextReply>{item.weightUnit}</TextReply>
                      </TextDetails>
                      <List1>
                        <StarOutlinedIcon style={{ color: "yellow" }} />
                        <StarOutlinedIcon style={{ color: "yellow" }} />
                        <StarOutlinedIcon style={{ color: "yellow" }} />
                        <StarOutlinedIcon style={{ color: "yellow" }} />
                        <StarBorderOutlinedIcon />
                      </List1>
                    </ProductDetails>
                    <ProductPrice>
                      <Prices>
                        Rs.{item.mrp}
                        <Msp>Rs.{item.msp}</Msp>
                      </Prices>
                      <Pcs>
                        Quantity:{item.qty}
                      </Pcs>
                    </ProductPrice>
                  </Right>
                </Items>
                <Line />
              </ItemsContainer>
            );
          })}
        </ProductItems>
        <Price>
          <PriceContainer>
            <SubPrice>
              <PriceHeading>Subtotal</PriceHeading>
              <PriceValue>Rs. {totalPrice}</PriceValue>
            </SubPrice>
            <SubPrice>
              <PriceHeading>Tax</PriceHeading>
              <PriceValue>Rs. 0</PriceValue>
            </SubPrice>
            <SubPrice>
              <PriceHeading>Shipping</PriceHeading>
              <PriceValue>Rs. 0 </PriceValue>
            </SubPrice>
          </PriceContainer>
          <RedeemCode>
            <Input type="text" placeholder="Promo code"></Input>
            <Apply>Apply Now</Apply>
          </RedeemCode>
        </Price>
        <TotalPrice>
          <Summary>
            <TextOrder>Total Order</TextOrder>
            <Instruction>Guaranteed delivery day:{date}</Instruction>
          </Summary>
          <OrderPrice>Rs.{totalPrice}</OrderPrice>
        </TotalPrice>
      </Wrapper>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};
export default connect(mapStateToProps)(Cart);
