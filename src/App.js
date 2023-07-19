import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./pages/Category";
import CategoryGrid from "./pages/CategoryGrid";
import Home from "./pages/Home";
import CheckOut from "./pages/CheckOut";
import Blog from "./pages/Blog";
import Addtocart from "./pages/Addtocart";
import About from "./pages/About";
import Description from "./pages/Description";
import Test from "./pages/Test";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";


const Container = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  // padding: 0px;
  // left: 327px

`;

export default function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/CategoryGrid" element={<CategoryGrid />} />
          <Route path="/CheckOut" element={<CheckOut />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/cartProduct" element={<Addtocart />} />
          <Route path="/About" element={<About />} />
          <Route path="/Description/:_id" element={<Description />} />
          <Route path="/test" element={<Test />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<SignUp/>} />
         </Routes>
      </BrowserRouter>
    </Container>
  );
}
