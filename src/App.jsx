import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./_root/home";
import Navbar from "./Components/shared/navbar/Navbar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='/login' element={<Login/>} /> */}
        {/* <Route path='/signup' element={<Signup/>} /> */}
      </Routes>
    </>
  );
}

export default App;
