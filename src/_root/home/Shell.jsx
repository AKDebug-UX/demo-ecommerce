import React from "react";
import Asgaard from "../../assets/images/Asgaard.png";
import { Link } from "react-router-dom";

function Shell() {
  return (
    <div className="bg-[#A5A5A5]">
      <section className="flex py-[5em] md:py-[2em] mx-5 md:mx-12 lg:flex-row flex-col items-center justify-center">
        <div className="flex-1 lg:flex hidden items-center justify-center">
          <div className="flex-1 flex justify-center items-center">
            <img className="lg:w-[100%] h-[25em] relative" src={Asgaard} />
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="text-[15px] font-bold">New Arrivals</div>
          <div className="text-[40px] font-bold">Shell Engine Oil</div>
          <Link to={"/shop"} className="font-bold bg-white text-black hover:bg-black hover:text-white py-3 mt-8 rounded-full text-center w-full lg:w-[15em]">
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Shell;
