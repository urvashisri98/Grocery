import React from "react";
import styled from "styled-components";
import ClearIcon from "@mui/icons-material/Clear";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  padding: 16px 45px;
  width: 1260px;
  height: 76px;
`;
const Wrapper = styled.div`
  position: relative;
  width: 1170px;
  height: 76px;
`;
const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  position: absolute;
  width: 821px;
  height: 76px;
  left: 0px;
  top: 0px;
`;
const FilterBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 821px;
  height: 42px;
`;
const Box1 = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 9px 16px;
  gap: 16px;
  width: 236px;
  height: 42px;
  background: #f9f9f9;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
`;
const Box4 = styled.div`
  width: 94px;
  height: 24px;
  align-items: center;
  display: flex;
`;
const Text1 = styled.div`
  left: 20.34%;
  right: 53.39%;
  top: 27.38%;
  bottom: 27.38%;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #151515;
`;
const Box2 = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 9px 16px;
  gap: 8px;
  width: 151px;
  height: 42px;
  background: #f9f9f9;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
`;
const Tag = styled.div`
  width: 12px;
  height: 18px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  color: #151515;
`;
const Line = styled.div`
  width: 250px;
  height: 0px;
  border: 1px solid #d1d1d1;
  transform: rotate(90deg);
`;
const Filter = styled.div`
  display: flex;
  // align-items: center;
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

const Box3 = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 9px 16px;
  gap: 10px;
  width: 235px;
  height: 42px;
  background: #f9f9f9;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
`;

const FilterText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px;
  gap: 12px;
  width: 348px;
  height: 18px;
`;
const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 8px;
  gap: 4px;
  width: 118px;
  height: 18px;
  background: #f4f8ec;
  border-radius: 12px;
`;
const Text = styled.div`
  width: 88px;
  height: 18px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
`;
export default function FilterBar() {
  return (
    <Container>
      <Wrapper>
        <FilterContainer>
          <FilterBox>
            <Box1>
              <Box4>
              <input type="radio" />
                <Text1>Filter Text</Text1>
              </Box4>
              <Box4>
              <input type="radio" />
                <Text1>Filter Text</Text1>
              </Box4>
            </Box1>
            <Box2>
            <input type="checkbox" />
              <Text1>Filter</Text1>
              <Text1>Nbm</Text1>
            </Box2>
            <Box2>
            <input type="checkbox" />
              <Text1>Filter</Text1>
              <Text1>Nbm</Text1>
            </Box2>
            <Box3>
            <input type="checkbox" />
              <Text1>Filter</Text1>
              <Tag>12</Tag>
              <Line />
              <Filter>
                <Select>
                  <Option>Select</Option>
                </Select>
              </Filter>
            </Box3>
          </FilterBox>
          <FilterText>
            <Box>
              <Text>Applied Filter </Text>
            </Box>
            <Box>
              <Text style={{ color: "yellowgreen" }}>Selected Filter </Text>
              <ClearIcon style={{ fontSize: 10, color: "yellowgreen" }} />
            </Box>
            <Box>
              <Text style={{ color: "yellowgreen" }}>Selected Filter </Text>
              <ClearIcon style={{ fontSize: 10, color: "yellowgreen" }} />
            </Box>
          </FilterText>
        </FilterContainer>
      </Wrapper>
      </Container>
  );
}
