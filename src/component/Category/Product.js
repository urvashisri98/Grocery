import React from "react";
import styled from "styled-components";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { ImgURL } from "../Constant/Constant";
import { connect } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { addToCart ,loadCurrentItem} from "../../redux/actions/ProductActions";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 32px;
  height: 1628px;
  width: 901px;
  left: 301.2568359375px;
  top: 0px;
  border-radius: 0px;
  // background: lightpink;
`;
const ProductContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 1;
  width: 869px;
  height: 270px;
  background: #ffffff;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
`;
const ImageBox = styled.div`
  flex: 1;
  height: 270px;
  width: 270px;
  left: 0px;
  top: 0px;
  padding: 10px;
  border-radius: 0px;
`;
const Image = styled.img`
  width: 90%;
  height: 90%;
`;
const List1 = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;

  width: 268px;
  height: 30px;
`;
const DescriptionBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  padding: 4px;
  gap: 10px;
  width: 269px;
  height: 212px;
  left: 300px;
  top: 32px;
`;
const ProductTitle = styled.h3`
  display: flex;
  align-items: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  color: #151515;
  height: 10px;
`;

const Desc = styled.p`
  width: 251px;
  height: 16px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 10px;
  color: #575757;
  padding: 0px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 12px;
  width: 237px;
  height: 112px;
`;
const InfoList = styled.div`
  width: 218px;
  height: 19px;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const InfoText = styled.div`
  // width: 100px;
  height: 19px;
  left: 0px;
  top: 0px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #a9a9a9;
`;
const PriceBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 24px;
`;
const Price = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 91px;
  height: 45px;
  left: 665px;
  top: 32px;
  // background : yellowgreen;
`;
const Msp = styled.div`
  width: 40px;
  height: 18px;
  left: 0px;
  top: calc(50% - 18px / 2 + 13.5px);
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-decoration-line: line-through;
  color: #a9a9a9;
`;
const Shipping = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100px;
  height: 34px;
  left: 665px;
  top: 93px;
`;
const ProductDetails = styled.div`
  display: flex;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px;
  gap: 8px;
  width: 220px;
  height: 95px;
  right: 32px;
  bottom: 32px;
`;
const PDetails = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  gap: 6px;
  width: 145px;
  height: 41px;
  background: #6a983c;
  cursor: pointer;
  border: 2px solid #46760a;
  border-radius: 12px;
`;
const WishList = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 12px;
  gap: 8px;
  cursor: pointer;
  width: 164px;
  height: 36px;
  background: #f5f5f5;
  border-radius: 12px;
`;

const Product = ({ productData, addToCart , loadCurrentItem}) => {
  return (
    <Container>
      <ProductContainer>
        <ImageBox>
          <Image src={ImgURL + productData.thumbnail} />
        </ImageBox>
        <DescriptionBox>
          <ProductTitle>
            <>{productData.productIdentifier}</>
          </ProductTitle>
          <Desc>{productData.description}</Desc>
          <List1>
            <StarOutlinedIcon />
            <StarOutlinedIcon />
            <StarOutlinedIcon />
            <StarOutlinedIcon />
            <StarBorderOutlinedIcon />
          </List1>
          <Info>
            <InfoList>
              <InfoText>Status</InfoText>
              <InfoText>{productData.status}</InfoText>
            </InfoList>
            <InfoList>
              <InfoText>Brand</InfoText>
              <InfoText>{productData.brand}</InfoText>
            </InfoList>
            <InfoList>
              <InfoText>Delivery</InfoText>
              <InfoText>India</InfoText>
            </InfoList>
            <InfoList>
              <InfoText>WeightUnit</InfoText>
              <InfoText>{productData.weightUnit}</InfoText>
            </InfoList>
          </Info>
        </DescriptionBox>
        <PriceBox>
          <Price>
            Rs. {productData.mrp}
            <Msp>Rs. {productData.msp}</Msp>
          </Price>

          <Shipping>
            <InfoText>Free Shipping</InfoText>
            <InfoText>Delivery in 1 day</InfoText>
          </Shipping>
          <ProductDetails>
            <PDetails onClick={() => loadCurrentItem(productData)}>
              <InfoList style={{ color: "white", alignItems: "center" }}>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={`/Description/${productData._id}`}
                >
                  Product Details
                </Link>
                <Outlet />
              </InfoList>
            </PDetails>
            <WishList onClick={() => addToCart(productData._id)}>
              <AddShoppingCartIcon style={{}} />
              Add to Cart
            </WishList>
          </ProductDetails>
        </PriceBox>
      </ProductContainer>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem : (item) => dispatch(loadCurrentItem(item))
   
  };
};


export default connect(null, mapDispatchToProps)(Product);

// // const [category, setCategory] = useState([]);

// // const collectData = async () => {
// //   fetch(`${URL}/catalog`).then((result) => {
// //     result.json().then((resp) => {
// //       const arr = [null];
// //       for (var i = 0; i < newLengthOfCatalog; i++) {
// //         arr[i] = resp.data[i];
// //       }
// //       setCategory(arr);
// //     });
// //   });
// // };
// // useEffect(() => {
// //   collectData();
// // }, []);

// {
//   /* <Container>
//       <Wrapper>
//         {category.map((item, i) => {
//           return (
//             <ProductContainer key={i}>
//               <ImageBox>
//                 <Image src={ImgURL + item.thumbnail} />
//               </ImageBox>
//               <DescriptionBox>
//                 <ProductTitle>{item.productIdentifier}</ProductTitle>
//                 <Desc>{item.desc}</Desc>
//                 <List1>
//                   <StarOutlinedIcon />
//                   <StarOutlinedIcon />
//                   <StarOutlinedIcon />
//                   <StarOutlinedIcon />
//                   <StarBorderOutlinedIcon />
//                 </List1>
//                 <Info>
//                   <InfoList>
//                     <InfoText>Freshness</InfoText>
//                     <InfoText>New(Extra Fresh)</InfoText>
//                   </InfoList>
//                   <InfoList>
//                     <InfoText>Farm</InfoText>
//                     <InfoText>Grocery Farm Field</InfoText>
//                   </InfoList>
//                   <InfoList>
//                     <InfoText>Delivery</InfoText>
//                     <InfoText>India</InfoText>
//                   </InfoList>
//                   <InfoList>
//                     <InfoText>Stock</InfoText>
//                     <InfoText>320 pcs.</InfoText>
//                   </InfoList>
//                 </Info>
//               </DescriptionBox>
//               <PriceBox>
//                 <Price>
//                   Rs. {item.mrp}
//                   <Msp>{item.msp}</Msp>
//                 </Price>
//                 <Shipping>
//                   <InfoText>Free Shipping</InfoText>
//                   <InfoText>Delivery in 1 day</InfoText>
//                 </Shipping>
//                 <ProductDetails>
// <PDetails>
//   <InfoList style={{ color: "white", alignItems: "center" }}>
//     <Link
//       style={{ textDecoration: "none", color: "white" }}
//       to="/Description"
//     >
//       Product Details
//     </Link>
//     <Outlet />
//   </InfoList>
// </PDetails>
//                   <WishList>
//                     <AddShoppingCartIcon style={{}} />
//                     Add to Cart
//                   </WishList>
//                 </ProductDetails>
//               </PriceBox>
//             </ProductContainer>
//           );
//         })}
//       </Wrapper>
//     </Container> */
// }
