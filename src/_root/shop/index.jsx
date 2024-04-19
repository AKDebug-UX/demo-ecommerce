import React from "react";
import Navbar from "../../Components/shared/navbar/Navbar";
import Shop_Hero from "../../Components/shared/hero/Shop";
import ProductListing from "./productListing";
import Footer from "../../Components/shared/footer/Footer";

export default function CartPage() {
  return (
    <div>
      <Navbar />
      <Shop_Hero />
      <ProductListing />
      <Footer />
    </div>
  );
}
