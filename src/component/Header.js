import React, { useState } from "react";
import styled from "styled-components";
import {
  PersonOutlineOutlined,
  SearchRounded,
  ShoppingBasketOutlined,
} from "@material-ui/icons";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { Badge } from "@material-ui/core";
import { useEffect } from "react";
import { logout } from "../redux/actions/UserAction";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 45px;
  width: 1170px;
  height: 130px;
  left: 0px;
  top: 0px;
  background: white;
`;
const Items = styled.div`
  flex: 1;
  // width: 70px;
  // height: 16px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #6a983c;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  padding: 0px 0px 0px 45px;
  display: flex;
  flex: 1.5;
  gap: 20px;
  justify-content: space-between;
`;
const Center = styled.div`
  flex: 2;
  align-items: center;
  display: flex;
  margin-left: 40px;
  cursor: pointer;
  justify-content: space-between;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 10px 0px 0px;
`;
const CartItems = styled.div``;
const Line1 = styled.div`
  position: absolute;
  margin-left: 40px;
  width: 1070px;
  top: 48px;
  opacity: 0.1;
  border: 1px solid black;
`;
const Line2 = styled.div`
flex : 1;
align-items : center
position: absolute;
width: 20px;
height: 0px;
left: 170px;
top: 11px;

border: 1px solid #D1D1D1;
transform: rotate(90deg);
`;

const Navbar = styled.div`
  padding: 1px 20px;
`;
const SearchContainer = styled.div`
  border: 0.4px solid lightgray;
  display: flex;
  align-items: center;
  padding: 10px;
  width: 75%;
  height: 10px;
  border-radius: 10px;
  background: #f9f9f9;
`;
const FilterContainer = styled.div`
  display: flex;
  flex: 1;
`;
const Filter = styled.div`
  padding: 10px;
`;

const Select = styled.select`
  border: none;
`;
const Option = styled.option``;
const Input = styled.input`
  flex: 1;
  min-width: 20%;
  padding: 4px;
  border: none;
  flex: 8;
`;
const Header = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();
  const LogoutHandler = () => {
    dispatch(logout());
  };

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });
    setCartCount(count);
  }, [cart, cartCount]);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Items>
            <Link
              style={{ textDecoration: "none", color: "olivedrab" }}
              to="/About"
            >
              Chat with us
            </Link>
          </Items>
          <Items>+420 336 775 664</Items>
          <Items>info@grocery.com</Items>
        </Left>
        <Center></Center>
        <Right>
          <Items>
            <Link
              style={{ textDecoration: "none", color: "olivedrab" }}
              to="/Blog"
            >
              Blog
            </Link>
          </Items>
          <Items>
            <Link
              style={{ textDecoration: "none", color: "olivedrab" }}
              to="/About"
            >
              About Us
            </Link>
          </Items>

          <Items>
            {userInfo ? (
              <Items style={{ cursor: "pointer", color: "blue" }}>
                {userInfo.data.fullName}
              </Items>
            ) : (
              <Link
                style={{ textDecoration: "none", color: "olivedrab" }}
                to="/Login"
              >
                Sign In
              </Link>
            )}
          </Items>
          <Items
            type="button"
            style={{ cursor: "pointer" }}
            onClick={LogoutHandler}
          >
            Logout
          </Items>
        </Right>
      </Wrapper>
      <Line1 />
      <Navbar>
        <Wrapper>
          <Left>
            <h1>Grocery</h1>
          </Left>
          <Center>
            <SearchContainer>
              <FilterContainer>
                <Filter>
                  <Select>
                    <Option>All Category</Option>
                    <Option>Vegetables</Option>
                    <Option>Fruits</Option>
                    <Option>Edible Oil</Option>
                    <Option>Spices</Option>
                  </Select>
                </Filter>
              </FilterContainer>
              <Line2 />
              <Input placeholder="search Product, category..." />
              <SearchRounded style={{ color: "blue", fontSize: 20 }} />
            </SearchContainer>
          </Center>
          <Right>
            <CartItems>
              {" "}
              <Link to="/test">
                <PersonOutlineOutlined style={{ margin: 10 }} />
              </Link>
            </CartItems>
            <CartItems>
              <Badge
                badgeContent={cartCount}
                color="primary"
                overlap="rectangular"
              >
                <Link to="/cartProduct">
                  <ShoppingBasketOutlined
                    style={{
                      textDecoration: "none",
                      color: "black",
                      margin: 35,
                    }}
                  />
                </Link>
              </Badge>
            </CartItems>
            <Outlet />
          </Right>
        </Wrapper>
      </Navbar>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Header);
