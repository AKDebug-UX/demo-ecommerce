import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Auths/signin";
import Home from "./_root/home";
import Cart from "./_root/cart/index";
import CheckOut from "./_root/CheckOut/index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </>
  );
}

export default App;
