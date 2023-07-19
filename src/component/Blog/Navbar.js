import React from "react";
import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 45px;
  width: 1260px;
  height: 15px;
  // background: lightpink;
`;
const Navigation = styled.div`
  width: 1170px;
  height: 16px;
  display: flex;
`;
const Path = styled.div`
  // width: 62px;
  height: 16px;
  flex-direction: row;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #a9a9a9;
`;
const Path1 = styled.div`
  width: 114px;
  height: 16px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #151515;
`;
export default function Navbar() {
  return (
    <Container>
      <Navigation>
        <Path>
          <Link style={{ textDecoration: "none", color: "gray" }} to="/">
            {" "}
            Homepage
          </Link>
        </Path>
        <Path>
          <Link style={{ textDecoration: "none", color: "gray" }} to="/Category">
            {" "}
            / Fruits and Vegetables
          </Link>
        </Path>
        <Outlet />

        <Path1>/ Product Title</Path1>
      </Navigation>
    </Container>
  );
}
