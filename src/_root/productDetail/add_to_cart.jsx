import React from "react";
import addToCart from "../../utils/Products/AddToCart";
export default function CartPage({ product }) {
  return (
    <div>
      <button
        className="border-0 text-gray-900 text-xl font-medium"
        onClick={() => addToCart(product)}
      >
        Add to cart
      </button>
    </div>
  );
}
