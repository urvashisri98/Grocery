import React from 'react'
import styled from 'styled-components'
import Filterbar from '../component/Filterbar'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Navbar1 from '../component/Description/Navbar1'
// import Product from '../component/Description/Product'
import ProductDetail from '../component/Category/ProductDetails'

const Container= styled.div`
// display: flex;
// flex-direction: column;
// align-items: flex-start;
// padding: 0px;
// // width: 1260px;
// height: 2773px;
// left: 330px;
// top: 0px;

// background: #FFFFFF;
// box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
display : flex;
// width: 1260px;
flex-direction : column;
align-items : center;
background: #FFFFFF;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
`

export default function Description() {
  return (
    <Container>
      <Header/>
      <Filterbar/>
      <Navbar1/>
      {/* <Product/> */}
      <ProductDetail/> 
      
      <Footer/>
       </Container>
  )
}
