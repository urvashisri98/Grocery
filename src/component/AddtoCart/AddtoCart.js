import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/ProductActions";
import Product from "./Product";
import { newLengthOfCatalog, URL } from "../Constant/Constant";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 64px 45px;
  margin: 64px 45px;
  gap: 32px;
  width: 1125px;
  height: 1656px;
  background: cyan;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
`;
export default function AddtoCart() {
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
      {products.map((item , i) => {
        return <Product key={i} productData={item} />;
      })}
    </Container>
  );
}


