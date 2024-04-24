import React from "react";
import Navbar from "../../Components/shared/navbar/Navbar";
import Footer from "../../Components/shared/footer/Footer";
import ProductDisplay from "./product_display";
export default function CartPage() {
  return (
    <div>
      <Navbar />
      <ProductDisplay />
      <Footer />
    </div>
  );
}
