import React from 'react'
import styled from 'styled-components'
import Navbar from '../component/Category/Navbar'
import Filterbar from '../component/Filterbar'
import Header from '../component/Header'
import CheckOutPage from '../component/CheckOut/CheckOutPage'

const Container = styled.div`
display : flex;
width: 1260px;
// height : 2000px;
flex-direction : column;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
`
const Copyright = styled.div`
width: 188px;
height: 19px;
padding : 20px;
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 19px;
color: #151515;
`

export default function CheckOut() {
  return (
    <Container>
      <Header/>
      <Filterbar/>
      <Navbar/>
      <CheckOutPage/>
      <Copyright>Copyright © 2022 demo.com</Copyright>
    </Container>
  )
}
