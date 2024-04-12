import React from "react";
import product_1 from "../../assets/images/product_1.svg";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();

  return (
    <div className="flex bg-blue h-[30em] w-full items-start justify-center gap-6 p-12">
      <div>
        <div className="flex flex-row px-12 py-5 items-center justify-between gap-[8em] bg-[#FFF9E5] rounded-md">
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
        </div>
        <div className="flex flex-row mt-12 gap-6 items-center justify-start">
          <div className="flex flex-row gap-6 text-gray-400 items-center justify-start">
            <img src={product_1} alt="" />
            <div>MIRAGE MR-AT172 285/65</div>
            <div>Rs. 50,000.00</div>
          </div>
          <input
            className="w-12 h-8 rounded-md border-2 text-center"
            type="number"
            placeholder="1"
            min="1"
          />
          <div>Rs. 50,000.00</div>
          <div className="text-[20px] text-[#FBEBB5] font-bold cursor-pointer">
            <ion-icon name="trash-outline"></ion-icon>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-5 h-[20em] w-[30em] items-center justify-start gap-3 bg-[#FFF9E5] rounded-md">
        <div className="text-[25px] font-bold">Cart Totals</div>
        <div className="flex mt-6 items-center justify-between gap-x-[8em]">
          <div className="text-black font-bold">Subtotal</div>
          <div className="text-grey-200">Rs. 50,000.00</div>
        </div>
        <div className="flex items-center justify-between gap-x-[8em]">
          <div className="text-black font-bold">Total</div>
          <div className="text-[#B88E2F]">Rs. 50,000.00</div>
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
