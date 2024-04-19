import React from "react";
import Navbar from "../Components/shared/navbar/Navbar";
import Hero from "../Components/shared/hero/Cart";
import Footer from "../Components/shared/footer/Footer";
import Cart from "../_root/cart/section";

export default function SignIn() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="flex flex-row ml-12 my-12">
        <div className="flex flex-col gap-5 ml-12 my-12 w-full">
          <div className="text-[30px] font-bold">Log In</div>
          <div className="flex flex-col gap-2">
            <label>Email:</label>
            <input type="text" className="border rounded p-2 w-full" />
          </div>

          <div className="flex flex-col gap-2">
            <label>Password:</label>
            <input type="password" className="border rounded p-2 w-full" />
          </div>

          <button className="font-bold py-3 text-white rounded-full bg-black w-full">
            Login
          </button>
        </div>
        <div className="w-full"></div>
      </div>
      <Cart />
      <Footer />
    </div>
  );
}
