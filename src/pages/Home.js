import React from 'react'
import styled from 'styled-components'
import Header from '../component/Header'
import Filterbar from '../component/Filterbar'
import Component3 from '../component/Home/Component3'
import SectionHeadlines from '../component/Home/SectionHeadlines'
import Footer from '../component/Footer'
import SellingProduct from '../component/Home/SellingProduct'
import FarmerSellingProduct from '../component/Home/FarmerSellingProduct'


const Container =styled.div`
  display : flex;
  // width: 1260px;
  flex-direction : column;
  align-items : center;
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
`
export default function Home() {
  return (
    <Container>
       <Header/>
      <Filterbar/>
      <Component3/>
      <SellingProduct/>
      <FarmerSellingProduct/>
      <SectionHeadlines/>
     <Footer/>   
     
    </Container>
  )
}