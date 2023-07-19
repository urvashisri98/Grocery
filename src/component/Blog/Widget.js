import React from "react";
import styled from "styled-components";
import { categoryMenu, dates } from "../data";
import { blog } from "../Blog/data";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // padding: 48px 45px;
  gap: 32px;
  margin: 45px;
  width: 1170px;
  height: 1108px;
  //   background: lime;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  //   background: lightcyan;
  width: 1172px;
  height: 1012px;
`;
const Heading = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #151515;
  height: 27px;
  //   width: 80px;
  left: 0px;
  top: 0px;
  border-radius: nullpx;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 48px;
  width: 269px;
  height: 626px;
  //   background: cyan;
`;
const Archive = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  padding: 0px;
  gap: 12px;
  width: 269px;
  height: 186px;
  //   background: lightpink;
`;
const ArchiveDates = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  // position: absolute;
  width: 269px;
  height: 19px;
  left: 0px;
  top: 43px;
`;
const Dates = styled.div`
  width: 269px;
  height: 19px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  text-decoration-line: underline;
  color: #6a983c;
`;
const Category = styled.div`
  display: flex;
  flex-direction: column;
  //   align-items: center;
  padding: 0px;
  gap: 12px;
  width: 269px;
  height: 186px;
  //   background: lightpink;
`;
const CategoryNames = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;

  // position: absolute;
  width: 269px;
  height: 19px;
  left: 0px;
  top: 43px;
`;
const Names = styled.div`
  width: 269px;
  height: 19px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  text-decoration-line: underline;
  color: #a9a9a9;
`;
const BlogSuscriber = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 24px;

  width: 269px;
  height: 158px;
`;
const Frame1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 269px;
  height: 92px;
`;
const Text = styled.div`
  width: 269px;
  height: 57px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #a9a9a9;
`;
const Frame2 = styled.div`
  width: 269px;
  height: 42px;
`;
const RedeemCode = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 42px;
  width: 269px;
  left: 0px;
  top: 0px;
  background: #ffffff;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
  position: relative;
`;
const Input = styled.input`
  // box-sizing: border-box;
  height: 42px;
  width: 269px;
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
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  width: 871px;
  height: 1012px;
  flex-wrap: wrap;
`;
const BlogPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 269px;
  height: 316px;
  background: white;
`;
const ImgContainer = styled.div`
  height: 180px;
  width: 269px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 267px;
  height: 112px;
`;
const TagBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 8px;
  gap: 10px;

  width: 40px;
  height: 18px;
  background: #f4f8ec;
  border-radius: 12px;
`;
const Tag = styled.div`
  width: 24px;
  height: 18px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #6a983c;
`;
const HeadLineBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  width: 267px;
  height: 86px;
`;
const HeadLine = styled.div`
  width: 267px;
  height: 54px;

  /* S4/Default */

  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;

  /* C1/A */

  color: #151515;
`;
const Author = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;
  width: 116px;
  height: 16px;
`;
const Date = styled.div`
  width: 39px;
  height: 16px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #151515;
`;
export default function Widget() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Archive>
            <Heading>Archives</Heading>
            {dates.map((item, i) => {
              return (
                <ArchiveDates key={i}>
                  <Dates>{item.month}</Dates>
                </ArchiveDates>
              );
            })}
          </Archive>
          <Category>
            <Heading>Category</Heading>
            {categoryMenu.map((items, i) => {
              return (
                <CategoryNames key={i}>
                  <Names>{items.category}</Names>
                </CategoryNames>
              );
            })}
          </Category>
          <BlogSuscriber>
            <Frame1>
              <Heading>Join Our list</Heading>
              <Text>
                Signup to be the first to hear about exclusive deals, special
                offers, recepies from our masters and others.
              </Text>
            </Frame1>
            <Frame2>
              <RedeemCode>
                <Input type="text" placeholder="Your Email address"></Input>
                <Apply>
                  <Heading>Subscribe</Heading>
                </Apply>
              </RedeemCode>
            </Frame2>
          </BlogSuscriber>
        </Left>
        <Right>
          {blog.map((items, i) => {
            return (
              <BlogPost key={i}>
                <ImgContainer>
                  <Image src={items.image} />
                </ImgContainer>
                <TextContainer>
                  <TagBox>
                    <Tag>{items.tag}</Tag>
                  </TagBox>
                  <HeadLineBox></HeadLineBox>
                  <HeadLine>{items.headlines}</HeadLine>
                  <Author>
                    {items.author}
                    <Date>11.7.2022</Date>
                  </Author>
                </TextContainer>
              </BlogPost>
            );
          })}
        </Right>
      </Wrapper>
    </Container>
  );
}
