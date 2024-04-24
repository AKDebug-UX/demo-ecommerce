import React from "react";
import hero from "../../../assets/heros_bg/homeHero.png";

function HeroSection() {
  return (
    <div>
      <div className="bg-[#D4D4D4]">
        <section className="flex py-[5em] md:py-[4em] mx-5 md:mx-12 lg:flex-row flex-col items-center justify-center">
          <div className="flex-1">
            <div className="mx-auto lg:text-left text-center">
              <h1 className="md:text-5xl text-4xl leading-normal text-white font-bold">
                WELCOME TO
                <span className="text-black hover:text-pink-400">
                  {" "}
                  E-Commerce{" "}
                </span>
                <br />
              </h1>
              <div className="lg:text-lg text-md leading-normal mt-4 font-normal text-black">
                All Major Brands Available
              </div>
              <button className="font-bold bg-white text-black hover:bg-black hover:text-white py-3 mt-8 rounded-full text-center w-full lg:w-[15em]">
                View Details
              </button>
            </div>
          </div>

          <div className="flex-1 lg:flex hidden items-center justify-center">
            <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
              <img className="lg:w-[90%] h-[30em] relative" src={hero} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HeroSection;
