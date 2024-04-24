import React from "react";
import hero from "../../assets/heros_bg/homeHero.png";

function Section_One() {
  return (
    <div className="bg-[#F5F5F5]">
      <section className="flex py-[5em] md:py-[4em] mx-5 md:mx-12 lg:flex-row flex-col items-center justify-center">
        <div className="flex-1 lg:flex hidden items-center justify-center">
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <img className="lg:w-[70%] h-[20em] relative" src={hero} />
          </div>
        </div>

        <div className="flex-1 lg:flex hidden items-center justify-center">
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <img className="lg:w-[70%] h-[20em] relative" src={hero} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section_One;
