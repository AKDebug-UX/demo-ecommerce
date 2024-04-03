import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-white sticky top-0 z-50">
      <header className="relative bg-white">
        <nav
          aria-label="Top"
          className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl "
        >
          <div className="flex flex-row h-20 justify-between items-center">
            {/* Logo */}
            <div className="flex lg:ml-0">
              <Link to={"/"} className="flex">
                <div className="flex ">
                  <h1 className=" text-2xl font-bold text-black  px-2 py-1 rounded">
                    E-Commerce
                  </h1>
                </div>
              </Link>
            </div>

            <nav className="ml-auto flex items-center">
              <ul className="flex flex-1 items-center justify-end space-x-6">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Shop
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  About us
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Contact us
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Tools
                </a>
              </ul>
            </nav>

            <div className="ml-auto hidden lg:flex items-center justify-center gap-3">
              <div className="flex text-[20px] items-center justify-center gap-8">
                <a href="#">
                  <ion-icon name="person-outline"></ion-icon>
                </a>
                <a href="#">
                  <ion-icon name="search-outline"></ion-icon>
                </a>
                <a href="#">
                  <ion-icon name="heart-outline"></ion-icon>
                </a>
                <a href="#">
                  <ion-icon name="cart-outline"></ion-icon>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
