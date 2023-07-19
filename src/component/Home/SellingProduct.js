import { ArrowForwardIosOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { bestSellingProduct } from "../../component/data";
import { ImgURL, URL } from "../Constant/Constant";

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 64px 45px;
  gap: 32px;
  width: 1260px;
  height: 460px;
  background: white;
`;

const Wrapper = styled.div`
  display: flex;
  // align-items: center;
  width: 1170px;
  height: 332px;
  padding: 0px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 48px;
  width: 269px;
  height: 282px;
  border: 1px;
  border-radius: 12px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 10px;
  width: 269px;
  height: 186px;
`;
const ListItem = styled.div`
  width: 269px;
  height: 19px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #6a983c;
`;
const Title = styled.div`
  margin: 0px 0px 8px 0px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 16px;
  margin: 37px 0px 0px 0px;
  width: 150px;
  height: 35px;
  background: #f5f5f5;
  border-radius: 12px;
  justify-content: space-between;
  cursor: pointer;
`;

const Justify = styled.div`
  flex: 3;
  width: 280px;
  height: 332px;
  padding: 0px;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  gap: 36px;
  background: #ffffff;
  border-radius: 12px;
  gap: 36px;
  width: 269px;
  height: 332px;

  border-radius: 12px;
`;

const Product = styled.div`
  flex: 1;
  position: relative;
  box-sizing: border-box;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
  width: 280px;
  height: 332px;
  display: flex;
  background: #ffffff;
  flex-direction: column;
  padding: 16px;
`;

const Tag = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 8px;
  gap: 10px;
  position: absolute;
  width: 30px;
  height: 18px;
  left: 12px;
  top: 12px;
  background: #f4f8ec;
  border-radius: 12px;
`;

const Discount = styled.div`
  width: 38px;
  height: 18px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #6a983c;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const ImageContainer = styled.div`
  display: flex;
  width: 214px;
  height: 184px;
  left: 0px;
  top: 0px;
  border-radius: 12px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProductTitle = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 2px;
  color: #151515;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Desc = styled.p`
  width: 251px;
  height: 16px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #575757;
  padding: 0px;
`;
const Section = styled.div`
  display: flex;
  width: 236px;
  height: 45px;
  justify-content: space-between;
`;
const Price = styled.div`
  width: 79px;
  height: 45px;
  left: 0px;
  top: 0px;
`;
const Mrp = styled.div`
  width: 79px;
  height: 27px;
  left: 0px;
  top: calc(50% - 27px / 2 - 9px);

  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */

  /* C1/A */

  color: #151515;
`;

const Button = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 6px;
  width: 90px;
  height: 36px;
  right: 0px;
  bottom: 20px;
  background: #6a983c;
  border: 2px solid #46760a;
  border-radius: 12px;
`;

const Shop = styled.div`
  width: 66px;
  height: 23px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
const Msp = styled.div`
  width: 35px;
  height: 18px;
  left: 0px;
  top: calc(50% - 18px / 2 + 13.5px);
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  text-decoration-line: line-through;
  color: #a9a9a9;
`;
export default function SellingProduct() {
  const [sellingProduct, setSellingProduct] = useState([]);
  
  const collectData = async () => {
    fetch(`${URL}/topsellingcatalog`).then((result) => {
      result.json().then((resp) => {
        const arr = [];
        for (var i = 0; i < 3; i++) {
          arr[i] = resp.data[i];
        }
        setSellingProduct(arr);
      });
    });
  };
  useEffect(() => {
    collectData();
  }, []);
  return (
    <Container>
      <Wrapper>
        <Left>
          <List>
            <Title>
              <h3>Best Selling Products</h3>
            </Title>
            {sellingProduct.map((item , i) => (
               <ListItem key={i}>{item.category}</ListItem>
            ))}
          </List>
          <Box>
            More Product{" "}
            <ArrowForwardIosOutlined
              style={{ fontSize: 15, fontWeight: 500 }}
            />
          </Box>
        </Left>
        <Justify>
          <Center>
            {sellingProduct.map((items, i) => (
                <Product key={i}>
                  <Tag>
                    <Discount>-36%</Discount>
                  </Tag>
                  <ImageContainer>
                  <Image src={ImgURL + items.thumbnail} />
                  </ImageContainer>
                  <ProductTitle>{items.productIdentifier}</ProductTitle>
                  <Desc>{items.description}</Desc>
                  <Section>
                    <Price>
                      <Mrp>Rs. {items.mrp}</Mrp>
                      <Msp>Rs. {items.msp}</Msp>
                    </Price>
                    <Button>
                      <Shop>Buy Now</Shop>
                    </Button>
                  </Section>
                </Product>
            ))}
          </Center>
        </Justify>
      </Wrapper>
    </Container>
  );
}
