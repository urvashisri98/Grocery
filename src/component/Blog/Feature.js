import React from "react";
import styled from "styled-components";
import { ImgBlog } from "../data";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // padding: 48px 45px;
  gap: 32px;
  width: 1170px; 
  height: 400px;
   margin: 45px;
`;
const Wrapper = styled.div`
  display: flex;
  // flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  width: 1169px;
  height: 400px;
 `;
const Blog = styled.div`
  background: lightcyan;
  padding: 0px;
  gap: 32px;
  width: 569px;
  height: 400px;
  display: flex;
`;
const BlogContainer = styled.div`
  width: 569px;
  height: 400px;
  position: relative;
`;
const TagBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 8px;
  gap: 10px;
  width: 26px;
  height: 18px;
  left: 24px;
  top: 24px;
  position: absolute;
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
const ImageContainer = styled.div`
  display: flex;
  width: 568px;
  height: 400px;
  left: 11px;
  top: -17px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Headlinebox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  position: absolute;
  height: 139px;
  left: 24px;
  right: 24px;
  bottom: 24px;
`;
const DarkMode = styled.div`
  position: absolute;
  height: 206px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
`;
const HeadLine = styled.div`
  width: 380px;
  height: 99px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;

  /* C1/J */

  color: #ffffff;
`;
const Author = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 79px;
  height: 32px;
  color: #ffffff;
`;
const Date = styled.div`
  width: 61px;
  height: 16px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;
`;
export default function Feature() {
  return (
    <Container>
      <Wrapper>
        <Blog>
          {ImgBlog.map((items,i) => {
            return (
              <BlogContainer key={i}>
                <ImageContainer>
                  <TagBox>
                    <Tag>{items.tag}</Tag>
                  </TagBox>
                  <Image src={items.image} />
                  <DarkMode />
                  <Headlinebox>
                    <HeadLine>{items.headline}</HeadLine>
                    <Author>
                      {items.author}
                      <Date>11.7.2022</Date>
                    </Author>
                  </Headlinebox>
                </ImageContainer>
              </BlogContainer>
            );
          })}
        </Blog>
      </Wrapper>
    </Container>
  );
}
