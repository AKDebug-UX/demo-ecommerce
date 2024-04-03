import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./_root/home";
import Cart from "./_root/cart/index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
