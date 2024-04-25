import React from "react";
import addToCart from "../../utils/Products/AddToCart";
export default function CartPage({ product, quantity }) {
  const handleClick = () => {
    // Create an object containing both product data and quantity
    const productWithQuantity = {
      ...product,
      quantity: quantity
    };
    addToCart(productWithQuantity);
  };
  return (
    <div>
      <button
        className="border-0 text-gray-900 text-sm font-medium"
        onClick={handleClick}
      >
        Add to cart
      </button>
    </div>
  );
}
