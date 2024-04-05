import React from "react";

export default function Cart() {
  return (
    <div className="flex bg-blue h-[30em] w-full items-start justify-center gap-6 p-12">
      <div>
        <div className="flex flex-row px-12 py-5 items-center justify-between gap-[8em] bg-[#FFF9E5] rounded-md">
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
        </div>
        <div className="bg-[yellow]"></div>
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
        <button className="border border-black mt-9 text-black hover:text-white bg-none hover:bg-black font-bold px-8 py-3 rounded-lg">Check Out</button>
      </div>
    </div>
  );
}
