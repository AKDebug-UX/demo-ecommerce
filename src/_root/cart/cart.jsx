import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getCartItems from "../../utils/Products/FetchCart";

export default function Cart() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let storedProducts = localStorage.getItem('cartItems');
    if (storedProducts) {
      storedProducts = JSON.parse(storedProducts);
    } else {
      storedProducts = getCartItems().map(item => ({
        ...item,
        quantity: 1,
      }));
    }
    setProducts(storedProducts);
    console.log("Cart initialized:", storedProducts);
  }, []);

  // Effect to update localStorage when products change
  useEffect(() => {
    const subtotal = getSubtotal();
    localStorage.setItem('total', subtotal); // Assuming no tax or shipping for simplification
    localStorage.setItem('cartItems', JSON.stringify(products));
  }, [products]);

  const handleQuantityChange = (index, newQuantity) => {
    const newProducts = products.map((product, i) => {
      if (i === index) {
        return { ...product, quantity: Number(newQuantity) };
      }
      return product;
    });
    setProducts(newProducts);
  };

  const getSubtotal = () => {
    return products.reduce((acc, product) => acc + product.price * product.quantity, 0);
  };


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[6em] bg-blue w-full items-start justify-between p-12">
      <div className="w-full h-[30em] overflow-y-auto">
        <div className="flex w-full justify-between space-x-6 py-4 px-4 bg-[#FFF9E5] rounded-md">
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
        </div>
        {products.map((product, index) => (
          <div key={index} className="flex flex-row mt-12 gap-3 items-center space-x-3 justify-between">
            <div className="flex flex-row gap-6 space-x-8 text-gray-400 items-center justify-start">
              <img src={product.image} className="w-28 h-28 object-contain" alt={product.title} />
              <div>${product.price}</div>
            </div>
            <input
              className="w-12 h-8 rounded-md border-2 text-center"
              type="number"
              value={product.quantity}
              min="1"
              onChange={(e) => handleQuantityChange(index, e.target.value)}
            />
            <div className="text-[16px] font-bold cursor-pointer flex items-center gap-2">
              <div className="flex flex-col justify-end items-end text-left">
                <div>${(product.price * product.quantity).toFixed(2)}</div>
              </div>
              <ion-icon name="trash-outline"></ion-icon>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col p-5 h-[20em] w-[22em] xl:w-[30em] items-center justify-start gap-3 bg-[#FFF9E5] rounded-md">
        <div className="text-[25px] font-bold">Cart Totals</div>
        <div className="flex mt-6 items-center justify-between gap-x-[3em] xl:gap-x-[8em]">
          <div className="text-black font-bold">Subtotal</div>
          <div className="text-grey-200">${getSubtotal().toFixed(2)}</div>
        </div>
        <div className="flex mt-6 items-center justify-between gap-x-[3em] xl:gap-x-[8em]">
          <div className="text-black font-bold">Total</div>
          <div className="text-grey-200">${getSubtotal().toFixed(2)}</div>
        </div>
        <button
          onClick={() => navigate(`/checkout`)}
          className="border border-black mt-9 text-black hover:text-white bg-none hover:bg-black font-bold px-8 py-3 rounded-lg"
        >
          Check Out
        </button>
      </div>
    </div>
  );
}
