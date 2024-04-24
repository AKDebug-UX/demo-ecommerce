import React from "react";
import { useNavigate } from "react-router-dom";

export default function productCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white text-left rounded-lg p-4 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
      onClick={() => navigate(`/products/${product.id}`)}
    >
      <div className="relative overflow-hidden w-48 h-48 mx-auto mb-4">
        <img
          className="absolute object-contain  w-28 sm:w-64 md:w-84 h-full"
          src={product.image}
          alt=""
        />
      </div>
      <div className="text-left">
        <h1 className="text-sm truncate font-semibold text-gray-800">{product.title}</h1>
        <p className="text-sm text-gray-500 truncate">{product.description}</p>
        <p className="text-gray-700 text-lg">Rs. {product.price}</p>
      </div>
    </div>
  );
}
