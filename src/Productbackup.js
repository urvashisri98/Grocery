import React from 'react'
import styled from 'styled-components'
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { ProductList } from '../data';

const Container = styled.div`
display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  height: 1528px;
  width: 901px;
  left: 301.2568359375px;
  top: 0px;
  border-radius: 0px;
`

// const Wrapper = styled.div`
// display: flex;
// flex-direction: column;
// align-items: flex-start;
// padding: 15px;
// gap: 32px;
// height: 1528px;
// width: 901px;
// left: 301.2568359375px;
// top: 0px;
// border-radius: 0px;
// `
const ProductContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 1;
  width: 869px;
  height: 280px;
  background: #ffffff;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
`;
const ImageBox = styled.div`
  flex: 1;
  height: 270px;
  width: 268px;
  left: 0px;
  top: 0px;
  border-radius: 0px;
`;
const Image = styled.img`
width : 100%;
height : 100%;
`;
const List1 = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;

  width: 268px;
  height: 30px;
`;
const DescriptionBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  padding: 4px;
  gap: 10px;
  width: 269px;
  height: 212px;
  left: 300px;
  top: 32px;
`;
const ProductTitle = styled.h3`
  display: flex;
  align-items: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  color: #151515;
  height: 10px;
`;

const Desc = styled.p`
  width: 251px;
  height: 16px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 10px;
  color: #575757;
  padding: 0px;
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
const PriceBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding : 24px;
`;
const Price = styled.div`
  display: flex;
  flex: 1;
  width: 91px;
  height: 45px;
  left: 665px;
  top: 32px;
`;
const Shipping = styled.div`
  display: flex;
  flex: 1;
  flex-direction:column;
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
  justify-content : center;
  padding: 0px;
  gap: 8px;
  width: 220px;
  height: 95px;
  right: 32px;
  bottom: 32px;
`;
const PDetails = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  gap: 6px;
  width: 145px;
  height: 41px;
  background: #6a983c;
  cursor: pointer;
  border: 2px solid #46760a;
  border-radius: 12px;
`;
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


export default function Product() {
 
  return (
    <Container>
        {/* <Wrapper> */}
      {ProductList.map((item) => {
            return (
              <ProductContainer>
                <ImageBox>
                  <Image src={item.img} />
                </ImageBox>
                <DescriptionBox>
                  <ProductTitle>
                    <h3>{item.title}</h3>
                  </ProductTitle>
                  <Desc>{item.desc}</Desc>
                  <List1>
                    <StarOutlinedIcon />
                    <StarOutlinedIcon />
                    <StarOutlinedIcon />
                    <StarOutlinedIcon />
                    <StarBorderOutlinedIcon />
                  </List1>
                  <Info>
                    <InfoList>
                      <InfoText>Freshness</InfoText>
                      <InfoText>New(Extra Fresh)</InfoText>
                    </InfoList>
                    <InfoList>
                      <InfoText>Farm</InfoText>
                      <InfoText>Grocery Farm Field</InfoText>
                    </InfoList>
                    <InfoList>
                      <InfoText>Delivery</InfoText>
                      <InfoText>India</InfoText>
                    </InfoList>
                    <InfoList>
                      <InfoText>Stock</InfoText>
                      <InfoText>320 pcs.</InfoText>
                    </InfoList>
                  </Info>
                </DescriptionBox>
                <PriceBox>
                  <Price>{item.price}</Price>
                  <Shipping>
                    <InfoText>Free Shipping</InfoText>
                    <InfoText>Delivery in 1 day</InfoText>
                    
                  </Shipping>
                  <ProductDetails>
                    <PDetails><InfoList style={{color : "white" , alignItems : "center"}}>Product Details</InfoList></PDetails>
                    <WishList>
                      <FavoriteBorderOutlinedIcon style={{}} />
                      Add to Wishlist
                    </WishList>
                  </ProductDetails>
                </PriceBox>
              </ProductContainer>
            );
          })}
          {/* </Wrapper> */}
    </Container>
  )
}
