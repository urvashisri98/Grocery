import React, { useEffect } from "react";
import styled from "styled-components";
import "./styles.css";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProducts } from "../../redux/actions/ProductActions";
import { newLengthOfCatalog, URL } from "../Constant/Constant";
import LeftOfCategory from "./LeftOfCategory";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 64px 45px;
  gap: 32px;
  width: 1170px;
  height: 1528px;
  // background : cyan;
  `;
const Wrapper = styled.div`
  width: 1171px;
  height: 1528px;

  display: flex;
  //   gap : 48px;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 48px;

  height: 939px;
  width: 270px;
  left: 0px;
  top: 0px;
  border-radius: 0px;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;
  gap: 24px;
  height: 1528px;
  width: 901px;
  left: 301.2568359375px;
  top: 0px;
  border-radius: 0px;
`;

export default function BoxContainer() {

  const products = useSelector((state) => state.shop.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get(`${URL}/catalog`)
      .catch((err) => {
        console.log("Error", err);
      });
      const arr = [null];
            for (var i = 0; i < newLengthOfCatalog; i++) {
              arr[i] = response.data.data[i];
            }
    dispatch(setProducts(arr));
  };
 
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container>
      <Wrapper>
        <Left>
          <LeftOfCategory/>
        </Left>
        <Right>
        {products.map((item) => {
        return <Product key={item._id} productData={item} />;
      })}
        </Right>
      </Wrapper>
    </Container>
  );
}
