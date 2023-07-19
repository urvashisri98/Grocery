import React from 'react'
import styled from 'styled-components';
import BoxContainer from '../component/CategoryGrid/BoxContainer';
import FilterBar from '../component/Category/FilterBar';
import Navbar from '../component/Category/Navbar';
import NavbarforTitles from '../component/Category/NavbarforTitles';
import Pagination from '../component/Category/Pagination';
import Filterbar from '../component/Filterbar';
import Footer from '../component/Footer';
import Header from '../component/Header';

const Container = styled.div`
  display : flex;
  width: 1260px;
  flex-direction : column;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
`

export default function Category() {
  return (
    <Container>
      <Header/>
      <Filterbar/>
      <Navbar/>
      <NavbarforTitles/>
      <FilterBar/>
      <BoxContainer/>
      <Pagination/>
      <Footer/>
    </Container>
  )
}
