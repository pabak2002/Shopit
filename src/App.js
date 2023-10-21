import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar.jsx";
import Products from "./components/Products";
import Product from "./components/Product";
import {Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/products" element={<Products/>}/>
        <Route exact path="/products/:id" element={<Product/>}/>
      </Routes>
    </>
  );
}

export default App;
