import React from "react";
import Navbar from "../Components/shared/navbar/Navbar";
import Hero from "../Components/shared/hero/Cart";
import Footer from "../Components/shared/footer/Footer";
import Cart from "../_root/cart/section";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="flex flex-row ml-12 my-12">
        <div className="flex flex-col gap-5 ml-12 my-12 w-full">
          <h2 className="text-[30px] text-black font-bold pt-5 sm:pt-12">
            Log in to your account
          </h2>
          <p className="text-primary_A2 small-medium md:base-regular">
            Welcome back! Please enter your details.
          </p>
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
          <p className="text-small-regular text-light-2 text-left mt-2">
            Don&apos;t have an account?
            <Link
              to="/sign-up"
              className="text-[blue] text-small-semibold ml-1"
            >
              Sign up
            </Link>
          </p>
        </div>
        <div className="w-full"></div>
      </div>
      <Cart />
      <Footer />
    </div>
  );
}
