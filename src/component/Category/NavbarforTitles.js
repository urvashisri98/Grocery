import React from "react";
import styled from "styled-components";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";
import { Link, Outlet } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  // padding: 8px 45px;
  width: 1260px;
  height: 44px;
  // background: cyan;
`;
const Left = styled.div`
  width: 335px;
  height: 48px;
  left: 0px;
  top: 0px;
  flex: 1;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
  color: #151515;
`;
const Right = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px;
  width: 275px;
  height: 18px;
  right: 0px;
  top: 15px;
`;
const GridView = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0px;
  gap: 4px;
  width: 73px;
  height: 18px;
`;
const ListView = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 0px;
  gap: 4px;

  width: 68px;
  height: 16px;
`;
const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 8px;
  gap: 10px;
  width: 32px;
  height: 18px;
  background: #f4f8ec;
  border-radius: 12px;
`;

const Product = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 0px;
  gap: 4px;
  width: 86px;
  height: 18px;
`;
const Text = styled.div`
  width: 53px;
  height: 16px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #151515;
`;
const TextBox = styled.div`
  width: 16px;
  height: 18px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #6a983c;
`;
export default function NavbarforTitles() {
  return (
    <Container>
      <Left>Fruits and Vegetables</Left>
      <Right>
        <GridView>
          <GridView />
          <Link style={{ color: "black" }} to="/CategoryGrid">
            <WindowOutlinedIcon style={{ fontSize: 18 }} />
          </Link>
          <Text>Grid view</Text>
        </GridView>
        <ListView>
          <Link style={{ color: "black" }} to="/Category">
            <ViewListOutlinedIcon />
          </Link>{" "}
          <Text>List View</Text>
        </ListView>
        <Product>
          <Box>
            <TextBox>117</TextBox>
          </Box>{" "}
          <Text>Products</Text>
        </Product>
        <Outlet />
      </Right>
    </Container>
  );
}
