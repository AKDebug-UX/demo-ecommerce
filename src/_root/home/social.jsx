import React from "react";
import { Link } from "react-router-dom";

function Social() {
  return (
    <section className="flex flex-col bg-[#FAF4F4] px-5 py-[5em] md:py-[6em] items-center justify-center">
      <div className="font-bold text-[40px]">Our Instagram</div>
      <div className="pt-3">Follow our store on Instagram</div>
      <Link
        to={"/shop"}
        className="font-bold bg-[#FAF4F4] w-full lg:w-[15em] text-black hover:bg-black hover:text-white py-3 mt-8 rounded-full text-center shadow-lg"
      >
        Follow Us
      </Link>
    </section>
  );
}

export default Social;
