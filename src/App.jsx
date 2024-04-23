import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Auths/signin";
import Home from "./_root/home";
import Cart from "./_root/cart/index";
import CheckOut from "./_root/CheckOut/index";
import Shop from "./_root/shop/index";
import ProductDetail from "./_root/productDetail/index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
