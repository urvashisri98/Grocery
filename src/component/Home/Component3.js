import { ArrowForwardIosOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { categoryMenu } from "../../component/data";
import { Link, Outlet } from "react-router-dom";
import { URL } from "../Constant/Constant";

const Component = styled.div`
  display: flex;
  align-items: center;
  padding: 64px 45px;
  width: 1260px;
  height: 282px;
  background: white;
  flex-direction: row;
  gap: 32px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px;
  border-radius: 12px;
  gap: 48px;
  width: 269px;
  height: 282px;
`;
const Box = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 6px 16px;
gap: 6px;
width: 179px;
height: 48px;
background: #F5F5F5;
border-radius: 12px;

`;
const Box1 = styled.div`
  display: flex;
  align-items: center;
  margin: 78px 0px 0px 33px;
  padding: 6px 16px;
  width: 149px;
  height: 35px;
  //   background:  #6a983c;
  border: 0.4px solid #6a983c;
  border-radius: 12px;
  justify-content: space-between;
  cursor: pointer;
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
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 25px;
  text-decoration-line: underline;
  cursor : pointer;
  color: #6a983c;
`;
const Title = styled.div`
  margin: -24px 0px 8px 0px;
`;

const Center = styled.div`
  flex: 1;
 
  height: 309px;
  width: 420px;
  border-radius: 12px;
  background: #f5f5f5;
`;

const Right = styled.div`
flex: 1;
align-items: center;
flex-direction : column
 display: flex;
  justify-content: space-between;
height: 309px;
width: 420px;
border-radius: 12px;
background: #f5f5f5;
`;
const Banner = styled.div`
  margin: 48px 0px 0px 33px;
  justify-content: ;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #6a983c;
`;
const Heading = styled.h1`
  margin: 20px 0px 0px 33px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  color: #151515;
`;

const Component3 = () => {
  const [category, setCategory] = useState([]);

  const collectData = async () => {
    fetch(`${URL}/category`).then((result) => {
      result.json().then((resp) => {
        setCategory(resp.data);
      });
    });
  };
  useEffect(() => {
    collectData();
  }, []);
  return (
    <Component>
      <Left>
        
        <List><Title>
          <h3>Category Menu</h3>
        </Title>
          {category.map((item , i) => {
            return <ListItem key={i}>{item.categoryName}</ListItem>;
          })}
        </List>
        <Box>
        <Link  style={{textDecoration: "none" , color: "black" }} to="/Category"> More Category</Link>{" "}
          <ArrowForwardIosOutlined style={{ fontSize: 15, fontWeight: 500 }} />
          <Outlet/>
        </Box>
      </Left>
      <Center>
        <Banner>Banner sub focus</Banner>
        <Heading>Space for Heading</Heading>
        <Box1>
          Read Recepies
          <ArrowForwardIosOutlined style={{ color: "#6A983C", fontSize: 18 }} />
        </Box1>
      </Center>
      <Right>
        {" "}
        <Banner>Banner sub focus</Banner>
        <Heading>Space for Heading</Heading>
        <Box1>
          Read Recepies{" "}
          <ArrowForwardIosOutlined style={{ color: "#6A983C", fontSize: 18 }} />
        </Box1>
      </Right>
    </Component>
  );
};

export default Component3;
