import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./_root/home";
import Cart from "./_root/cart/index";
import CheckOut from "./_root/CheckOut/index";
import Shop from "./_root/shop/index"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/shop" element={<Shop/>} />
      </Routes>
    </>
  );
}

export default App;
