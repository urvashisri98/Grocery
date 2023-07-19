import React from "react";
import styled from "styled-components";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import { StarBorder } from "@material-ui/icons";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/ProductActions";
import { ImgURL } from "../Constant/Constant";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 45px;
  gap: 32px;
  margin: 10px;
  // width: 1260px;
  height: 510px;
  background: #ffffff;
  // background: blue;
`;
const Wrapper = styled.div`
box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  // padding: 0px;
  gap: 32px;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
  // background: LightPink;
  width: 1190px;
  height: 500px;
`;
const ImageBox = styled.div`
  height: 400px;
  width: 500px;
  padding :30px;
  margin: 30px 0px 0px 28px;
  // background: red;
  border-radius: 12px;
`;

const Image = styled.img`
  width: 90%;
  height: 90%;
`;
const Frame = styled.div`
  display: flex;
  // flex-direction: column;
  align-items: flex-start;
  // padding: 0px;
  gap: 5px;
    width: 480px;
  height: 400px;
  
  margin: 50px 0px 0px 28px;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px;
  gap: 25px;
  // background: yellow;
  width: 240px;
  height: 390px;
  margin: 0px 0px 0px 0px;
  // left: 300px;
  // top: 32px;
`;
const Text = styled.div`
  // display: flex;
  // flex-direction: column;
  // align-items: flex-start;
  padding: 5px;
  gap: 8px;
  width: 230px;
  height: 120px;
  // background: white;
`;
const Heading = styled.div`
  width: 200px;
  height: 32px;
  // background:red;

  font-family: "system-ui";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 40px;
  / identical to box height /
  color: #151515;
  // display: flex;
  flex-direction: column;
  // padding:0px;
`;
const Text2 = styled.div`
  width: 269px;
  height: 16px;
  font-family: "system-ui";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #575757;
`;
const Rating = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 0px 0px 0px;
  gap: 2px;
  width: 320px;
  height: 30px;
  // background:lightblue;
  color: yellow;
  cusror: pointer;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 12px;
  width: 237px;
  height: 112px;
`;
const InfoList = styled.div`
  width: 218px;
  height: 19px;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const InfoText = styled.div`
  // width: 100px;
  height: 19px;
  left: 0px;
  top: 0px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #a9a9a9;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px;
  // gap: 25px;
  // background: yellow;
  // position: absolute;
  width: 269px;
  height: 390px;
  margin: 0px 0px 0px 0px;
`;
const PriceBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 24px;
`;
const Price = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 91px;
  height: 45px;
  left: 665px;
  top: 32px;
  // background : yellowgreen;
`;
const Msp = styled.div`
  width: 40px;
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
const Shipping = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100px;
  height: 34px;
  left: 665px;
  top: 93px;
`;
const ProductDetails = styled.div`
  display: flex;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px;
  gap: 8px;
  width: 220px;
  height: 95px;
  right: 32px;
  bottom: 32px;
`;
// const PDetails = styled.div`
//   box-sizing: border-box;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   padding: 10px;
//   gap: 6px;
//   // position: absolute;
//   width: 100px;
//   height: 32px;
//   right: 0px;
//   top: calc(50% - 32px / 2);
//   background: #f9f9f9;
//   border: 1px solid #d1d1d1;
//   border-radius: 12px;
// `;
const WishList = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 12px;
  gap: 8px;
  cursor: pointer;
  width: 164px;
  height: 36px;
  background: #f5f5f5;
  border-radius: 12px;
`;
const ProductDetail = ({ addToCart, currentItem }) => {
  console.log("Current" , currentItem);
  return (
    <Container>
      <Wrapper>
        <ImageBox>
          <Image src={ImgURL + currentItem.thumbnail} />
        </ImageBox>
        <Frame>
          <Detail>
            <Text>
              <Heading>
              {currentItem.productIdentifier}
                <Rating>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarBorder />
                </Rating>
                <Text2> {currentItem.description} </Text2>
              </Heading>
            </Text>
            <Info>
              <InfoList>
                <InfoText>Model</InfoText>
                <InfoText>{currentItem.models}</InfoText>
              </InfoList>
              <InfoList>
                <InfoText>Brand</InfoText>
                <InfoText>{currentItem.brand}</InfoText>
              </InfoList>
              <InfoList>
                <InfoText>Delivery</InfoText>
                <InfoText>India</InfoText>
              </InfoList>
              <InfoList>
                <InfoText>Cash on Delivery</InfoText>
                <InfoText>{currentItem.cod}</InfoText>
              </InfoList>
              <InfoList>
                <InfoText>WeightUnit</InfoText>
                <InfoText>{currentItem.weightUnit}</InfoText>
              </InfoList>
              <InfoList>
                <InfoText>Category</InfoText>
                <InfoText>{currentItem.category}</InfoText>
              </InfoList>
              <InfoList>
                <InfoText>Quantity</InfoText>
                <InfoText>{currentItem.qty}</InfoText>
              </InfoList>
            </Info>
          </Detail>
          <Right>
            <PriceBox>
              <Price>
                Rs. {currentItem.mrp}
                <Msp>Rs.{currentItem.msp}</Msp>
              </Price>

              <Shipping>
                <InfoText>Free Shipping</InfoText>
                <InfoText>Delivery in 1 day</InfoText>
              </Shipping>
              <ProductDetails>
                <WishList onClick={() => addToCart(currentItem._id)}>
                  <AddShoppingCartIcon style={{}} />
                  Add to Cart
                </WishList>
              </ProductDetails>
            </PriceBox>
          </Right>
        </Frame>
      </Wrapper>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
