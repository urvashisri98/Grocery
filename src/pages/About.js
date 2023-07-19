import React from 'react'
import styled from 'styled-components'
import Navbar from '../component/About_Us/Navbar'
import Frame from '../component/About_Us/Frame'
import Tag from '../component/About_Us/Tag'
import Topic from '../component/About_Us/Topic'
import Form from '../component/About_Us/Form'
import Filterbar from '../component/Filterbar'
import Footer from '../component/Footer'
import Header from '../component/Header'

const Container = styled.div`

  display : flex;
  // width: 1260px;
  flex-direction : column;
  align-items : center;
  // background : cyan;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
`

export default function About() {
  return (
    <Container>
      <Header/>
      <Filterbar/>
      <Navbar/>
      <Frame/>
      <Tag/>
      <Form/>
      <Topic/>
      <Footer/>
    </Container>
  )
}
