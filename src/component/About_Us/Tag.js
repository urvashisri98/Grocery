import React from "react";
import styled from "styled-components";
import TurnLeftIcon from "@mui/icons-material/TurnLeft";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Tag1 = styled.div`
  display: flex;
  flex-direction: column;

  padding: 48px 45px;
  gap: 32px;

  width: 1170px;
  height: 830px;
  background: white;
  // background: green;
`;
const Frame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;

  width: 1170px;
  height: 937px;
`;
const LeftFrame = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 48px;
  width: 169px;
  height: 286px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  width: 169px;
  height: 193px;
`;

const Li = styled.div`
  display: flex;
  // flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 169px;
  height: 60px;
`;
// const Button= styled.div`
//   display: flex;
//   // flex-direction: column;
//   align-items: flex-start;
//   padding: 0px;
//   gap: 8px;

//   width: 169px;
//   height: 60px;
// `;
const Box1 = styled.div`
  display: flex;
  flex-direction: row;
  // align-items: center;
  padding: 6px 0px;
  gap: 6px;
  width: 217px;
  height: 30px;
  background: #ffffff;
  // background:lightblue;
  border-radius: 12px;
  justify-content : flex-start;
`;

const Text2=styled.div`
width: 115px;
height: 23px;
font-family: 'system-ui';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 29px;
color: #151515;
// background:green;
`
const RightFrame = styled.div`
  width: 569px;
  height: 937px;

  flex: 3;
`;
const Text = styled.div`
  width: 569px;
  height: 117px;
  font-family: "system-ui";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 23px;
  color: #151515;
  // background:lightblue;
  // justify-content: flex-start;
`;

const Heading = styled.h3`
  width: 236px;
  height: 27px;
  left: 0px;
  top: 165px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 55px;
  color: #151515;
  // background:lightblue;
`;

const Share = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;
  width: 568px;
  height: 36px;
  left: 0px;
  top: 901px;
`;

const Socialicon = styled.div`
  flex-direction: row;
  display: flex;
  gap: 16px;
`;
const Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 12px;
  gap: 6px;
  width: 90px;
  height: 25px;
  background: #f5f5f5;
  border-radius: 12px;
`;
function Tag() {
  return (
    <Tag1>
      <Frame>
        <LeftFrame>
          <Box>
            <h1>Tags</h1>
            <Li>
              <Button>Food </Button>
              <Button>Recipe</Button>
            </Li>
            <Li>
              <Button>Fresh </Button>
              <Button>Vegetable</Button>
            </Li>
          </Box>
          <Box1>
            <TurnLeftIcon />
            <Text2>Back to Blog</Text2>
          </Box1>
        </LeftFrame>
        <RightFrame>
          <Text>
            There's nothing like a warm cup of tea of start your morning-or
            maybe you're all about an iced hibiscus on a sunny saturday
            afternoon.Whether you're just craving chamomile or are looking to
            ditch your coffee dependency,here's our go-to guide on corporating a
            few new teas into uyour daily routine!{" "}
          </Text>
          <Heading>Morning Ritual //9:00AM </Heading>
          <Text>
            Want that extra morning energy without the caffeine jitters? Switch
            out your morning mug of coffee for a warm, energizing cup of earl
            grey. Serve as is or stir in some milk and honey for extra coziness.
            If you want to spice things up, try chai tea instead! The
            combination of cinnamon, cardamom, and ginger smells amazing and
            gives you that nice little flavor kick to start your day off right.
          </Text>
          <Heading>Mid Day Boost //2:00PM </Heading>
          <Text>
            If you're feeling a little sluggish post-lunch, beat the afternoon
            slump with some lemon ginger green tea. Green tea can be a great
            alternative to coffee in the afternoon when you want that little
            boost of energy. An added benefit: lemon and ginger work together to
            aid digestion which is especially helpful after lunch.
          </Text>
          <Text>
            If you're not into hot drinks, opt-in for a fruity iced green tea
            instead. Steep some honeydew or peach green tea in hot water for a
            few minutes and then pour over ice until it's nice and cool. Enjoy
            with a slice of lemon, and you'll feel refreshed and ready to tackle
            any task.
          </Text>
          <Heading>Evening Calm //8:00PM </Heading>
          <Text>
            Slip on some fuzzy socks, light your favorite candles, and fire up
            the kettle—it's time to wind down after a long day. Grab yourself a
            soothing cup of lavender chamomile tea and indulge in some
            well-deserved self-love.
          </Text>
          <Share>
            <h3> Share </h3>
            <Socialicon>
              <Button>
                <FacebookIcon />
                Facebook
              </Button>
              <Button>
                <PinterestIcon />
                Pintrest
              </Button>
              <Button>
                <TwitterIcon />
                Twitter
              </Button>
              <Button>
                <LinkedInIcon />
                Linkedin
              </Button>
            </Socialicon>
          </Share>
        </RightFrame>
      </Frame>
    </Tag1>
  );
}

export default Tag;
