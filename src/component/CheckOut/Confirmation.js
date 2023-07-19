import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import styled from "styled-components";
import Icon from "../../image/security.png";
import { URL, User_URL } from "../Constant/Constant";
import { Link, Outlet } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 670px;
  height: 418px;
  // background: lightcyan;
`;
const Heading = styled.div`
  width: 670px;
  height: 53px;
`;
const Title = styled.div`
  display : flex
  width: 116px;
  height: 33px;
  left: 0px;
  top: 0px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  color: #151515;
`;
const Instruction = styled.div`
display : flex
  width: 160px;
  height: 16px;
  left: 0px;
  top: 37px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color : #A9A9A9;
`;
const Step1 = styled.div`
  position: absolute;
  width: 60.01px;
  height: 16px;
  right: 0px;
  top: 37px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: right;
`;
const Wrapper5 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  position: relative;
  width: 670px;
  height: 418px;
`;
const Agreement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  // background: cyan;
  width: 670px;
  height: 100px;
`;
const Agreement1 = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 9px 16px;
  gap: 8px;
  width: 578px;
  height: 42px;
  background: #f9f9f9;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
`;
const Instruction1 = styled.div`
  width: 514px;
  height: 19px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #151515;
`;
const Agreement2 = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 9px 16px;
  gap: 8px;
  width: 433px;
  height: 42px;
  background: #f9f9f9;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
`;
const Text = styled.div`
  // width: 42px;
  height: 16px;
  left: 56px;
  top: 15px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #151515;
`;
const Image = styled.img``;
const ButtonBox = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  // padding: 12px 48px;
  gap: 6px;
  width: 160px;
  height: 50px;
  background: #6a983c;
  border: 2px solid #46760a;
  border-radius: 12px;
  cursor: pointer;
`;
const TextOrder = styled.div`
  width: 122px;
  height: 23px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  text-align: right;
  color: #ffffff;
`;
const LastBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 213px;
  height: 113px;
`;

const Confirmation = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [addressId, setAddressId] = useState("");

  const ItemId = useSelector((state) => state.itemId);

  useEffect(() => {
    let items = 0;
    let Price = 0;
    cart.forEach((item) => {
      items += item.qty;
      Price += item.qty * item.mrp;
    });
    setTotalItems(items);
    setTotalPrice(Price);
    getAddressId();
  }, [cart, totalItems, totalPrice, setTotalItems, setTotalPrice]);

  let userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const getAddressId = ()=>{
    try {
      fetch(`${User_URL}/api/address/${userInfo.data.id}`).then((result) => {
        result.json().then((resp) => {
          let array = resp.data.length;
          setAddressId(resp.data[array - 1].id);
        });
      });
    } catch (e) {
      console.log(e);
    }
 }  

 const completeOrder = async (
    mobile,
    totalPrice,
    seller_id,
    user_id,
    itemCount,
    item,
    Id
  ) => {

    try{
      let result = await fetch(`${User_URL}/api/order`, {
        method: "POST",
        body: JSON.stringify({
          mobile,
          totalPrice,
          seller_id,
          user_id,
          itemCount,
          item,
          address_id: addressId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
    
      if (result.status === 200) {
        let result = await fetch(`${URL}/catalog/clean`, {
          method: "POST",
          body: JSON.stringify({
            user_id,
            items: item,
            _id: Id,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        result = await result.json();
        console.log("Result", result);
      } else {
        console.log(result.statusMessge);
      }
    
      console.log("Result", result);

    }catch(e){
      console.log(e);
    }
  };
 
  return (
    <Container>
      <Wrapper5>
        <Heading>
          <Title>Confirmation</Title>
          <Instruction>
            We are getting to the end. Just few clicks and your order si ready!
          </Instruction>
          <Step1>Step 5 of 5</Step1>
        </Heading>
        <Agreement>
          <Agreement1>
            <input type="checkbox" />
            <Instruction1>
              I agree with sending an Marketing and newsletter emails. No spam,
              promissed!
            </Instruction1>
          </Agreement1>
          <Agreement2>
            <input type="checkbox" />
            <Instruction1>
              I agree with our terms and conditions and privacy policy.
            </Instruction1>
          </Agreement2>
        </Agreement>
        <ButtonBox>
          <Link 
          style={{color : "white" ,textDecoration : "none"}}
          to="/">

          <TextOrder
            onClick={() =>
              completeOrder(
                userInfo.data.mobile,
                totalPrice,
                cart[0].seller,
                userInfo.data.id,
                totalItems,
                cart,
                ItemId.id
                )
              }
              >
            Complete Order
          </TextOrder>
            </Link>
            <Outlet/>
        </ButtonBox>
        <LastBox>
          <Image src={Icon} />
          <Text>All your data are safe</Text>
          <Instruction>
            We are using the most advanced security to provide you the best
            experience ever.
          </Instruction>
        </LastBox>
      </Wrapper5>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Confirmation);
// export default Confirmation
