import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Fruit, vitamin } from "../../data";
import StarIcon from "@mui/icons-material/Star";
// import StarHalfIcon from '@mui/icons-material/StarHalf';
import { StarBorder } from "@material-ui/icons";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ImgURL, URL } from "../Constant/Constant";
import { Link, Outlet } from "react-router-dom";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 45px;
  gap: 32px;

  width: 1260px;
  height: 1900px;

  /* C1/J */
  background: pink;
  //   background: #ffffff;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  // background: green;
  width: 1160px;
  height: 1335px;
`;

const Group1 = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  padding: 0px;
  gap: 32px;
  // background: green;
  width: 569px;
  height: 1335px;
`;
const Group3 = styled.div`
  // position: absolute;
`;
const Img = styled.img`
  width: 400px;
  padding: 50px 0px 0px 100px;
  // text-align:center;
`;

const Group2 = styled.div`
  width: 650px;
  height: 1247px;
  background: white;
`;
const Heading = styled.div`
  width: 555px;
  height: 45px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 140%;
  color: #151515;
  // background:blue;
  padding: 0px 0px 0px 20px;
`;
// const Button = styled.div`
//   display: flex;
//   flex-direction: row;
//   // align-items: center;
//   padding: 4px 10px;
//   gap: 10px;

//   width: 58px;
//   height: 26px;

//   /* C2/E */

//   background: #f4f8ec;
//   border-radius: 12px;
// `;

// const Head = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   padding: 0px;
//   gap: 12px;
//   // position: absolute;
//   width: 173px;
//   height: 26px;
//   left: 16px;
//   top: 16px;
//   // background:red;
// `;
const Rating = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 0px 0px 20px;
  gap: 2px;
  width: 320px;
  height: 20px;
  // background:lightblue;
  color: yellow;
  cusror: pointer;
`;
const Review = styled.div`
  width: 130px;
  height: 16px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #a9a9a9;
  cursor: pointer;
`;

const Text = styled.div`
  width: 550px;
  height: 100px;
  font-family: "system-ui";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 23px;
  color: #151515;
  // background: lightblue;
  padding: 30px 0px 0px 25px;
`;

const Detail = styled.div`
  width: 570px;
  height: 112px;
  // background:green;
  display: flex;
`;

const Detail1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  // position: absolute;
  width: 400px;
  height: 112px;
  left: 10px;
  top: 222px;
  // background:yellow;
`;
const Detail2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  // position: absolute;
  width: 400px;
  height: 112px;
  left: 301px;
  top: 222px;
  // background:pink;
`;

const Sku = styled.div`
  width: 269px;
  height: 19px;
  display: flex;
`;
const Vegetables = styled.div`
  width: 269px;
  height: 19px;
  display: flex;
`;
const Stock = styled.div`
  width: 269px;
  height: 19px;
  display: flex;
`;
const Farm = styled.div`
  width: 269px;
  height: 19px;
  display: flex;
`;
const Listitem = styled.div`
  // position: absolute;
  width: 107px;
  height: 19px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 19px;
  color: #a9a9a9;
  padding: 0px 0px 0px 25px;
  // background:red;
`;

const Li = styled.div`
  // position: absolute;
  width: 165px;
  height: 19px;
  // right: 126px;
  top: 0px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 19px;
  padding: 0px 0px 0px 10px;
  // background:blue;
`;

const Anchor = styled.div`
  width: 150px;
  height: 19px;
  right: 126px;
  top: 0px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 19px;
  padding: 0px 0px 0px 5px;
  // color: green;
`;
const Price = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 600px;
  height: 148px;
  // background: lightblue;
`;

const Price1 = styled.div`
  width: 600px;
  height: 150px;
  // background: yellow;
  display: flex;
`;

const Price2 = styled.div`
  display: flex;
  // flex-direction: row;
  // align-items: center;
  padding: 17px 0px 0px 0px;
  gap: 16px;
  // background:pink;
  width: 400px;
  height: 25px;
`;
const Wishlist = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1px 20px;
  gap: 6px;

  width: 191px;
  height: 25px;

  /* C1/J */
  font-size: 18px;
  // background: grey;
  border-radius: 12px;
  font-weight: 600;
  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Usd = styled.div`
  padding: 20px 0px 0px 20px;
  width: 129px;
  height: 39px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 39px;
  color: green;
`;

const USD = styled.div`
  width: 62px;
  height: 18px;

  /* S6/Crossed */

  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height */

  display: flex;
  // align-items: flex-end;
  text-decoration-line: line-through;

  /* C1/C */
  padding: 0px 0px 0px 20px;
  color: #a9a9a9;
`;

const USD1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  // position: absolute;
  width: 140px;
  height: 80px;
  // left: 16px;
  top: 16px;
  // background: blue;
`;
const Pcs = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  // padding: 0px 0px 10px 60px;
  gap: 16px;

  // position: absolute;
  height: 41px;
  width: 111px;
  left: 235px;
  top: 20.5px;
  border-radius: 12px;
  padding: 14px, 16px, 14px, 16px;
  margin: 18px 0px 0px 100px;
  background: #f9f9f9;
  border: 1px solid #d1d1d1;
  // border-radius: 12px;
`;
const Select = styled.select`
  border: none;
  border-radius: 12px;
  margin: 0px 0px 0px 28px;
`;
const Option = styled.option``;

const Button1 = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  gap: 6px;

  //  position: absolute;
  width: 140px;
  height: 41px;
  //  left: 370px;
  //  top: 21.5px;

  /* C2/A */
  margin: 18px 0px 0px 100px;
  background: #6a983c;
  /* C2/B */

  border: 2px solid #46760a;
  border-radius: 12px;
`;

const Text3 = styled.div`
  width: 110px;
  height: 23px;

  /* Button/Default */

  font-family: "system-ui";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
  /* identical to box height */
  // background:blue;

  /* C1/J */

  color: #ffffff;
`;
//  const Pcs1 = styled.div`
//   box-sizing: border-box;
//   width: 9px;
//   height: 19px;
//   font-family: "Open Sans";
//   font-style: normal;
//   font-weight: 400;
//   font-size: 14px;
//   line-height: 19px;
//   color: #f9f9f9;
//   border: 1px solid #d1d1d1;
// `;

const Like = styled.div`
  // position: absolute;
  left: 8.33%;
  right: 8.33%;
  top: 14.16%;
  bottom: 14.17%;

  /* C4/A */
  color: red;
  border: 0px solid #e6704b;
`;
const Compare = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1px 12px;
  gap: 6px;

  width: 140px;
  height: 23px;

  /* C1/J */
  // background:lightgrey;
  background: #ffffff;
  border-radius: 12px;
`;
const Com = styled.div`
  font-weight: 600;
  font-size: 18px;
`;

const Productdetail = styled.div`
  position: absolute;
  width: 580px;
  height: 625px;
  left: 655px;
  top: 760px;
  // background: lightblue;
`;

const DesHeading = styled.div`
  // position: absolute;
  display: flex;
  width: 573px;
  height: 50px;
  left: 0.08px;
  top: 0px;
  // background: pink;
`;

const Deescription = styled.div`
  // position: absolute;
  width: 105px;
  height: 27px;

  /* S4/Default */

  font-family: "system-ui";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  /* identical to box height */
  // background:blue;

  /* C1/A */
  padding: 10px 0px 0px 20px;
  color: #151515;
`;
const Reeview = styled.div`
  width: 75px;
  display: flex;
  height: 27px;
  font-family: "system-ui";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: #151515;
  // background:blue;
  padding: 10px 0px 0px 110px;
`;
const Reeview1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 8px;
  gap: 10px;
  color: green;
  width: 20px;
  height: 18px;
  margin: 6px 0px 0px 5px;
  background: #f4f8ec;
  border-radius: 12px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const Question = styled.div`
  width: 75px;
  display: flex;
  height: 27px;
  font-family: "system-ui";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: #151515;
  // background:blue;
  padding: 10px 0px 0px 130px;
`;

const Ques = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 6px;
  gap: 10px;
  color: green;
  width: 13px;
  height: 18px;
  margin: 5px 0px 0px 5px;
  background: #f4f8ec;
  border-radius: 12px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;
const Origin = styled.div`
  width: 573px;
  height: 130px;
  // background: yellow;
`;

const Orihead = styled.div`
  // position: absolute;
  width: 54px;
  height: 23px;
  left: 2px;
  top: 0px;

  /* S5/Default */

  font-family: "system-ui";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
  /* identical to box height */

  /* C1/A */
  padding: 10px 0px 0px 20px;
  color: #151515;
`;
const Msg = styled.div`
  // position: absolute;
  width: 569px;
  height: 60px;
  left: 2px;
  top: 31px;

  /* Body/Default */

  font-family: "system-ui";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  /* C1/A */
  padding: 15px 0px 0px 20px;
  color: #151515;
`;
const Cook = styled.div`
  // position: absolute;
  width: 130px;
  height: 23px;
  left: 2px;
  top: 120px;

  /* S5/Default */

  font-family: "system-ui";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
  /* identical to box height */

  padding: 10px 0px 0px 20px;
  /* C1/A */
  // background:red;
  color: #151515;
`;
const Head6 = styled.div`
  width: 569px;
  height: 100px;
  // background:blue;
`;

const Vitamins = styled.div`
  width: 573px;
  height: 351px;
  // background: pink;
`;

const Full = styled.div`
  // position: absolute;
  width: 180px;
  height: 23px;
  left: 0px;
  top: 221px;

  /* S5/Default */

  font-family: "system-ui";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
  /* identical to box height */

  /* C1/A */
  padding: 10px 0px 0px 20px;
  color: #151515;
`;
const Products = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  // background: lightgreen;
  // position: absolute;
  width: 573px;
  height: 312px;
  left: 0px;
  top: 260px;
`;

const Headings = styled.div`
  width: 573px;
  height: 32px;
  // background: red;
  margin: 10px 0px 0px 0px;
  display: flex;
`;
const Vita = styled.div`
  // position: absolute;
  width: 56px;
  height: 18px;
  left: 0px;
  top: calc(50% - 18px / 2);

  /* S6/Default */

  font-family: "system-ui";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  /* identical to box height */

  padding: 10px 0px 0px 20px;
  /* C1/A */

  color: #151515;
`;
const Quantity = styled.div`
  // position: absolute;
  width: 54px;
  height: 18px;
  left: calc(50% - 54px / 2 - 49.5px);
  top: calc(50% - 18px / 2);

  /* S6/Default */
  padding: 10px 0px 0px 170px;
  font-family: "system-ui";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  /* identical to box height */

  /* C1/A */

  color: #151515;
`;
const DV = styled.div`
  // position: absolute;
  width: 30px;
  height: 18px;
  right: 117px;
  top: calc(50% - 18px / 2);

  /* S6/Default */

  font-family: "system-ui";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  /* identical to box height */

  /* C1/A */
  padding: 10px 0px 0px 190px;
  color: #151515;
`;

const Vitamin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  position: absolute;
  width: 573px;
  height: 262px;
  left: 0px;
  top: 260px;
  // background: blue;
  margin: 100px 0px 0px 0px;
`;
const Lists = styled.div`
  height: 40px;
  width: 573px;
  left: 0px;
  top: 0px;
  border-radius: 0px;
  // background: red;
  display: flex;
`;
const Li1 = styled.div`
  // position: absolute;
  width: 106px;
  height: 19px;
  left: 0px;
  top: calc(50% - 19px / 2 + 0.5px);

  /* Body/Default */

  font-family: "system-ui";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  /* identical to box height */
  // padding:0px 20px 0px 0px ;
  margin: 10px 0px 0px 20px;
  // background:pink;
  /* C1/B */

  color: #575757;
`;

const Li2 = styled.div`
  // width: 45px;
  height: 19px;
  left: calc(50% - 45px / 2 - 54px);
  top: calc(50% - 19px / 2 + 0.5px);
  margin: 10px 0px 0px 135px;
  /* Body/Default */

  font-family: "system-ui";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  /* identical to box height */

  /* C1/B */

  color: #575757;
`;
const Li3 = styled.div`
  // width: 30px;
  height: 19px;
  right: 107px;
  top: calc(50% - 19px / 2 + 0.5px);
  align-items: flex-start;
  /* Body/Default */
  //  flex-direction:column;
  font-family: "system-ui";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  /* identical to box height */

  /* C1/B */
  margin: 10px 0px 0px 190px;
  color: #575757;
`;
const Relatedpro = styled.div`
  // display: flex;
  // flex-direction: column;
  // align-items: flex-start;
  padding: 64px 45px;
  gap: 32px;

  width: 1070px;
  height: 500px;

  background: #ffffff;
`;

const MoreProduct = styled.div`
  width: 1070px;
  height: 38px;
  // background:pink;
  // margin:0px 0px 0px 3px;
  display: flex;
  justify-content: space-between;
`;
const Related = styled.div`
  width: 158px;
  height: 27px;
  left: 0px;
  top: 6px;
  font-family: "system-ui";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: #151515;
  margin: 2px 0px 0px 0px;
`;
const More = styled.div`
  display: flex;
  flex-direction: row;
  // align-items: center;
  padding: 6px 0px;
  gap: 6px;
  font-size: 18px;
  // position: absolute;
  width: 155px;
  height: 25px;
  right: 0px;
  top: 1.5px;
  font-weight: 600;
  margin: 0px 0px 0px 701px;
  /* C1/J */
  // background:green;
  // background: #FFFFFF;
  border-radius: 12px;
`;

const Arrow = styled.div`
  width: 16px;
  height: 16px;
  // margin:2px 0px 0px 700px;
  color: green;
  // background:black;
`;
const Pictures = styled.div`
  padding: 0px;
  gap: 32px;
  // background:yellow;
  width: 1080px;
  height: 300px;
  display: flex;
`;

const Blog1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  // gap:  6px;

  width: 210px;
  height: 266px;
  background: #ffffff;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
`;
const Imagecontainer = styled.div`
  height: 170px;
  width: 220px;
  left: 0px;
  top: 0px;
  border-radius: 12px;
`;
const Img1 = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 236px;
  height: 95px;
`;
const Title = styled.div`
  width: 251px;
  height: 23px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  color: #151515;
`;
const Des = styled.div`
  width: 251px;
  height: 16px;

  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  /* C1/B */

  color: #575757;
`;
const Buy = styled.div`
  width: 226px;
  height: 36px;
  display: flex;
`;
// const Price=styled.div`
// `
const Buy1 = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  // align-items: center;
  padding: 0px;
  gap: 6px;

  // position: absolute;
  width: 90px;
  height: 33px;
  right: 0px;
  bottom: 0px;
  margin: 0px 12px 0px 5px;
  // padding:0px 0px 0px 5px;
  /* C2/A */

  background: #6a983c;
  /* C2/B */

  border: 2px solid #46760a;
  border-radius: 12px;
`;

const Text2 = styled.div`
  width: 63px;
  height: 23px;
  // background:blue;
  /* Button/Default */

  font-family: "system-ui";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
  /* identical to box height */
  padding: 0px 8px 0px 8px;
  margin: 3px 0px 0px 6px;
  /* C1/J */

  color: #ffffff;
`;

function Product() {
  const [relatedProduct, setRelatedProduct] = useState([]);

  const collectProduct = async () => {
    fetch(`${URL}/topsellingcatalog`).then((result) => {
      result.json().then((resp) => {
        const arr = [null];
        for (var i = 0; i < 4; i++) {
          arr[i] = resp.data[i];
        }
        setRelatedProduct(arr);
      });
    });
  };
  useEffect(() => {
    collectProduct();
  }, []);
  return (
    <Container>
      <Wrapper>
        <Group1>
          <Group3>
            {Fruit.map((item) => {
              return <Img src={item.img}></Img>;
            })}
          </Group3>
        </Group1>
        <Group2>
          <Heading>Carrots from Tomissy Farm</Heading>
          <Rating>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarBorder />
            <Review>(1 customer review)</Review>
          </Rating>
          <Text>
            Carrots from Tomissy Farm are one of the best on the market. Tomisso
            and his family are giving a full love to his Bio products. Tomisso's
            carrots are growing on the fields naturally.
          </Text>
          <Detail>
            <Detail1>
              <Sku>
                <Listitem>SKU:</Listitem>
                <Li>76645</Li>
              </Sku>
              <Vegetables>
                <Listitem>Category:</Listitem>
                <Li>Vegetables</Li>
              </Vegetables>
              <Stock>
                <Listitem>Stock:</Listitem>
                <Anchor>
                  <a href="/">In Stock</a>
                </Anchor>
              </Stock>
              <Farm>
                <Listitem>Farm</Listitem>
                <Li>Grocery Tarm Feilds</Li>
              </Farm>
            </Detail1>
            <Detail2>
              <Sku>
                <Listitem>Freshness:</Listitem>
                <Li>1 days old</Li>
              </Sku>
              <Vegetables>
                <Listitem>Buy by:</Listitem>
                <Li>pcs,kgs,box,pack</Li>
              </Vegetables>
              <Stock>
                <Listitem>Delivery:</Listitem>
                <Li>in 2 days</Li>
              </Stock>
              <Farm>
                <Listitem>Delivery area</Listitem>
                <Li>Czech republic</Li>
              </Farm>
            </Detail2>
          </Detail>
          <Price>
            <Price1>
              <USD1>
                <Usd>36.23 USD</Usd>
                <USD>48.56 USD</USD>
              </USD1>
              <Pcs>
                <Select>
                  <Option>Pcs</Option>
                  <Option>1 Pcs</Option>
                  <Option>2 Pcs</Option>
                  <Option>3 Pcs</Option>
                  <Option>4 Pcs</Option>
                </Select>
              </Pcs>
              <Button1>
                <Text3>
                  <Link style={{ color : "white" ,textDecoration : "none"}} to="/Checkout">+ Add To Cart</Link>
                </Text3>
                <Outlet/>
              </Button1>
            </Price1>
            <Price2>
              <Wishlist>
                <Like>
                  <FavoriteBorderIcon />
                </Like>
                Add To my wish list
              </Wishlist>
              <Compare>
                <DnsOutlinedIcon />
                <Com>Compare</Com>
              </Compare>
            </Price2>
          </Price>

          <Productdetail>
            <DesHeading>
              <Deescription>Description</Deescription>
              <Reeview>
                Review
                <Reeview1>18</Reeview1>
              </Reeview>
              <Question>
                Questions
                <Ques>4</Ques>
              </Question>
            </DesHeading>
            <Origin>
              <Orihead>Origins</Orihead>
              <Msg>
                We work hard to ensure that the fruit and vegetables we sell are
                fresh and high in quality. If we don`t grow them ourselves, we
                source them from carefully chosen suppliers, preferring to buy
                locally whenever possible.
              </Msg>
            </Origin>
            <Head6>
              <Cook>How to cook</Cook>
              <Msg>
                From roasts, salads and soups to casseroles and cakes, Carrots
                will lend sweetness, texture and colour to an enormous number of
                recipes.
              </Msg>
            </Head6>
            <Vitamins>
              <Full>Full Of Vitamins!</Full>
              <Products>
                <Headings>
                  <Vita>Vitamins</Vita>
                  <Quantity>Quantity</Quantity>
                  <DV>%DV</DV>
                </Headings>
                <Vitamin>
                  {vitamin.map((item) => {
                    return (
                      <Lists>
                        <Li1>{item.Vitamins}</Li1>
                        <Li2>{item.Quantity}</Li2>
                        <Li3>{item.DV}</Li3>
                      </Lists>
                    );
                  })}
                </Vitamin>
              </Products>
            </Vitamins>
          </Productdetail>
        </Group2>
      </Wrapper>
      <Relatedpro>
        <MoreProduct>
          <Related>Related products</Related>
          <More>
            More products
            <Arrow>
              <ArrowForwardIosIcon />
            </Arrow>
          </More>
        </MoreProduct>
        <Pictures>
          {relatedProduct.map((item) => {
            return (
              <Blog1>
                <Imagecontainer>
                  <Img1 src={ImgURL + item.thumbnail} />
                </Imagecontainer>
                <Information>
                  <Title> {item.productIdentifier}</Title>
                  <Des>{item.description}</Des>
                  <Buy>
                    <Price>{item.mrp}</Price>

                    <Buy1>
                      <Text2>Buy Now</Text2>
                    </Buy1>
                  </Buy>
                </Information>
              </Blog1>
            );
          })}
        </Pictures>
      </Relatedpro>
    </Container>
  );
}

export default Product;
