import React from "react";

export default function Cart() {
  return (
    <div className="flex bg-[#FAF4F4] h-[15em] w-full items-center justify-center gap-12 p-12">
      <div className="w-[350px]">
        <h1 className="text-[32px] font-bold">Free Delivery</h1>
        <div>For all oders over $50, consectetur adipim scing elit.</div>
      </div>
      <div className="w-[350px]">
        <h1 className="text-[32px] font-bold">90 Days Return</h1>
        <div>If goods have problems, consectetur adipim scing elit.</div>
      </div>
      <div className="w-[350px]">
        <h1 className="text-[32px] font-bold">Secure Payment</h1>
        <div>100% secure payment, consectetur adipim scing elit.</div>
      </div>
    </div>
  );
}
