import { ArrowForwardIosOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { SectionProduct } from "../../component/data";
import { ImgURL,  URL } from "../Constant/Constant";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 64px 45px;
  gap: 32px;
  width: 1260px;
  height: 432px;
`;

const Header = styled.div`
  width: 1170px;
  height: 38px;
  // flex: none;
  display : flex;
  justify-content : space-between;
  align-self: stretch;
  flex-grow: 0;
  position: relative;
`;
const Heading = styled.div`
  width: 155px;
  height: 27px;
  left: 0px;
  top: 6px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
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

const Text = styled.div`
  width: 52px;
  height: 23px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  color: #151515;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 42px;
  width: 1170px;
  height: 332px;
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
const ImageContainer = styled.div`
  width: 236px;
  height: 180px;
`;

const Image = styled.img`
  width: 90%;
  height: 90%;
  object-fit: cover;
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
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const Price = styled.div`
  width: 79px;
  height: 45px;
  left: 0px;
  top: 0px;
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
const Section = styled.div`
  display: flex;
  width: 236px;
  height: 45px;
  justify-content: space-between;
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
export default function SectionHeadlines() {
  const [category, setCategory] = useState([]);

  const collectData = async () => {
    fetch(`${URL}/topsellingcatalog`).then((result) => {
      result.json().then((resp) => {
        const arr = [null];
        for (var i = 0; i < 4; i++) {
          arr[i] = resp.data[i];
        }
        setCategory(arr);
      });
    });
  };
  useEffect(() => {
    collectData();
  }, []);
  return (
    <Container>
      <Header>
        <Heading>Section Headline</Heading>
        <Button>
          <Text style={{color : "white"}}>Button</Text>
          <ArrowForwardIosOutlined
            style={{ fontSize: 15, color: "green", fontWeight: 500 }}
          />
        </Button>
      </Header>
      <Wrapper>
        {category.map((item , i) => {
          return (
            <Product key={i}>
              <Tag>
                <Discount>-36%</Discount>
              </Tag>
              <ImageContainer>
                {/* <Image src={item.img} /> */}
                <Image src={ImgURL + item.thumbnail} />
              </ImageContainer>
              <ProductTitle>{item.productIdentifier}</ProductTitle>
              <Desc>{item.description}</Desc>
              <Section>
                <Price>
                  <Mrp>{item.mrp}</Mrp>
                  <Msp>{item.msp}</Msp>
                </Price>
                <Button>
                  <Shop>Buy Now</Shop>
                </Button>
              </Section>
            </Product>
          );
        })}
      </Wrapper>
    </Container>
  );
}
