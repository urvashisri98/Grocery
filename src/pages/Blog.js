import React from 'react'
import styled from "styled-components";
import Feature from '../component/Blog/Feature';
import Navbar from '../component/Blog/Navbar';
import NavbarforTitles from '../component/Blog/NavbarforTitle';
import Widget from '../component/Blog/Widget';
import Filterbar from '../component/Filterbar';
import Footer from '../component/Footer';
import Header from '../component/Header';
import  Pagination from '../component/Category/Pagination';
const Container = styled.div`
display: flex;
flex-direction: column;
align-items : center;
// background : lightpink;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
`

export default function Blog() {
  return (
    <Container>
        <Header/>
        <Filterbar/>
        <Navbar/>
        <NavbarforTitles/>
        <Feature/>
        <Widget/>
        <Pagination/>
        <Footer/>      
    </Container>
  )
}
