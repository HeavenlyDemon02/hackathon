import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/navbar";
import Card from "./components/card";
import Product from "./components/product";
import Carousal from "./components/carousal";
import Updater from "./components/Updater";
import About from "./components/About";
import Idea from "./Idea";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" />
          <Route path="/add" element={<h1>Add product</h1>} />
          <Route path="/update" element={<h1>Update product</h1>} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<Card />} />
        </Routes>
      </BrowserRouter>
      <Carousal/>
      <Idea />
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
