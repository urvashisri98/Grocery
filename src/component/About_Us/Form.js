import styled from "styled-components";
import React from "react";
import { Checkbox } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  padding: 0px 45px;
  gap: 32px;
  width: 1260px;
  height: 950px;
  // background: lightpink;
`;

const Wrapper = styled.div`
  height: 1320px;
  width: 969px;
  left: 205.5px;
  top: 20px;
  border-radius: 0px;
  background: white;
  position: relative;
`;
const Box1 = styled.div`
  position: absolute;
  width: 569px;
  height: 906px;
  left: 310.5px;
  top: 0px;
  // background: cyan
`;

const Box2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  width: 569px;
  height: 460px;
  // background: lightskyblue;
`;
const Box3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 569px;
  height: 144px;
  // background: lightcyan;
`;
const Heading = styled.div`
  width: 148px;
  height: 33px;
  font-family: "system-ui";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
  color: #151515;
`;
const Title = styled.div`
  width: 383px;
  height: 23px;

  /* Lead/Default */

  font-family: 'system-ui';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 23px;

  /* C1/A */

  color: #151515;
`;
const Detail = styled.div`
  width: 569px;
  height: 60px;
  display: flex;
  flex: 1;
`;

const Name = styled.div`
  height: 18px;
  left: 0px;
  right: 0px;
  top: 0px;
  font-family: 'system-ui';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  color: #151515;
  padding: 0px 0px 0px 0px;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 252px;
  left: 0px;
  right: 0px;
  top: 18px;
  bottom: 0px;
  background: #f9f9f9;
  border: 0px solid #d1d1d1;
  border-radius: 12px;
  height: 30px;
`;

const Det = styled.div`
  width: 269px;
  height: 60px;
  left: 300px;
  top: 84px;
  flex: 1;
  align-items: row;
  flex-direction: column;
`;

const CheckboxText = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 9px 16px;
  gap: 8px;
  width: 567px;
  height: 45px;
  background: #f9f9f9;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
`;

const Comment = styled.div`
  // position: absolute;
  height: 18px;
  left: 0px;
  right: 0px;
  top: 0px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: Lightblue;
`;
const Box4 = styled.textarea`
  box-sizing: border-box;
  width: 567px;
  height: 125px;
  // position: absolute;
  left: 0px;
  right: 0px;
  top: 18px;
  bottom: 0px;
  background: #f9f9f9;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
`;

const Button = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 9px 66px;
  gap: 6px;
  margin: 3px;
  width: 227px;
  height: 41px;
  background: #6a983c;
  border: 2px solid #46760a;
  border-radius: 12px;
  color: white;
`;
const Comments = styled.div`
  width: 189.29px;
  height: 33px;
  font-family: 'system-ui';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 33px;
  color: #151515;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 24px;
  width: 535px;
  height: 335px;
  background: #ffffff;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
`;

const Profile1=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 16px;
gap: 24px;

width: 496px;
height: 172px;

/* C1/J */

background: #FFFFFF;
/* C1/D */

border: 1px solid #D1D1D1;
border-radius: 12px;
`
const Xyz = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0px;
  width: 105px;
  height: 34px;
`;
const Button1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 8px;
  gap: 10px;

  width: 67px;
  height: 23px;

  /* C2/E */
  color: green;
  background: #f4f8ec;
  border-radius: 12px;
`;
const Dates = styled.div`
  display: flex;
  flex-direction: column;
`;

const Date = styled.div`
  width: 61px;
  height: 16px;

  /* Caption/Default */

  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  /* C1/D */

  color: #d1d1d1;
`;

const Para = styled.div`
  width: 478px;
  height: 76px;
  font-family: 'system-ui';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  color: #151515;
  padding:0px 0px 0px 18px;
`;

const Para1=styled.div`
width: 478px;
height: 76px;
font-family: 'system-ui';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 19px;
color: #151515;

`
const Box5 = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 7px;
  gap: 24px;

  width: 493px;
  height: 145px;
  //  flex-wrap:wrap;
  /* C1/J */

  background: #ffffff;
  /* C1/D */
  margin:0px 0px 0px 50px;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
`;
// const Topic=styled.div`
// width: 1010px;
// height: 36px;
// background-color:lightgreen;
// left:30px;
// `
function Form() {
  return (
    <Box>
      <Wrapper>
        <Box1>
          <Box2>
            <Box3>
              <Heading>Leave a reply</Heading>
              <Title>Already have an account?Sign in to leave a reply</Title>
              <Detail>
                <Det>
                  <Name>Name</Name>
                  <Input type="text" placeholder="Name" />
                </Det>
                <Det>
                  <Name>Email Address</Name>
                  <Input type="text" placeholder="Email" />
                </Det>
              </Detail>
            </Box3>
            <CheckboxText>
              <Checkbox />
              Save my name and email in this browser for a next time comment
            </CheckboxText>
            <Comment>
              <Heading>Comment</Heading>
              <Box4 type="text"></Box4>
              <Button>Send comment</Button>
            </Comment>
          </Box2>
          <Comments>Comments</Comments>
          <Profile>
            <Profile1>
            <Xyz>
              <AccountCircleIcon />
              <Dates>
                Author <Date>20.6.2021</Date>
              </Dates>
              <Button1>Admin</Button1>
            </Xyz>
            <Para >
              Hi everyone, we have been working hard with the team bringing a
              new articles. It has passed a few months till we released it in
              case of traveling and shooting, hopefully you'll love it.
            </Para>
            </Profile1>
            <Box5>
              <Xyz>
                <AccountCircleIcon />
                <Dates>
                  User <Date>20.6.2021</Date>
                </Dates>
                <Button1>Customer</Button1>
              </Xyz>
              <Para1>
                Don't worry about that, we are happy to read a new stories. The
                time we had to wait was crazy, but the results are awesome! You
                did an epic job. Now I just need to a buy one.
              </Para1>
            </Box5>
          </Profile>
        </Box1>
       </Wrapper>
       
      </Box>
  );
}

export default Form;
