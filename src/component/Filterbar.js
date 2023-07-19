import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { URL } from "./Constant/Constant";
// import { grocery } from "./data";

const Container = styled.div`
  display: flex;
  padding: 16px 45px;
  gap: 39px;
  width: 1170px;
  height: 23px;
  background: #f9f9f9;
  border-radius: 0px;
`;
const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;
  gap: 40px;

  width: 1049px;
  height: 23px;
`;

const Select = styled.select`
  border: none;
`;
const Option = styled.option`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 2px;

  width: 66px;
  height: 23px;
`;

const Filterbar = () => {
  const [category, setCategory] = useState([]);

  const collectData = async () => {
    fetch(`${URL}/category`).then((result) => {
      result.json().then((resp) => {
        let arr = [];
        for (let i = 0; i < resp.data.length; i++) {
          let z = resp.data[i].categoryName || null
          if (z) {
            arr.push(resp.data[i]);
          }
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
      {category.map((item, i) => {
        return (
          <FilterContainer key={i}>
            <Select>
              <Option>{item.categoryName}</Option>
              {item.subcategory.map((item1, j) => {
                return <Option key={j}>{item1.categoryName}</Option>;
              })}
            </Select>
          </FilterContainer>
        );
      })}
    </Container>
  );
};

export default Filterbar;
