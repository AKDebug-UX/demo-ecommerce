import React from "react";
import blog_1 from "../../assets/images/blog_1.png";

function Blogs() {
  return (
    <div className="bg-[#F5F5F5] text-center">
      <section className="flex lg:flex-row flex-col py-[5em] md:py-[4em] gap-7 items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <img className="w-full h-64 relative" src={blog_1} />
          <div className="text-center">
            <h1 className="text-md mt-5 truncate font-semibold text-gray-800">
              How to change engine oil at home?
            </h1>
            <button
              // onClick={() => navigate(`/products/${product.id}`)}
              className="text-gray-700 border-b border-black py-3 font-bold text-md"
            >
              Read More
            </button>
          </div>
          <div className="flex flex-row mt-5 gap-12 text-center items-center justify-between">
            <div className="flex text-sm gap-2 text-gray-800 items-center justify-center">
              <ion-icon name="alarm-outline"></ion-icon>5 min
            </div>
            <div className="flex text-sm gap-2 text-gray-800 items-center justify-center">
              <ion-icon name="calendar-outline"></ion-icon> 12th Oct 2023
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img className="w-full h-64 relative" src={blog_1} />
          <div className="text-center">
            <h1 className="text-md mt-5 truncate font-semibold text-gray-800">
              Guide to prolong the life of engine oil
            </h1>
            <button
              // onClick={() => navigate(`/products/${product.id}`)}
              className="text-gray-700 border-b border-black py-3 font-bold text-md"
            >
              Read More
            </button>
          </div>
          <div className="flex flex-row mt-5 gap-12 text-center items-center justify-between">
            <div className="flex text-sm gap-2 text-gray-800 items-center justify-center">
              <ion-icon name="alarm-outline"></ion-icon>5 min
            </div>
            <div className="flex text-sm gap-2 text-gray-800 items-center justify-center">
              <ion-icon name="calendar-outline"></ion-icon> 12th Oct 2023
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img className="w-full h-64 relative" src={blog_1} />
          <div className="text-center">
            <h1 className="text-md mt-5 truncate font-semibold text-gray-800">
              How to take care of engine oil?
            </h1>
            <button
              // onClick={() => navigate(`/products/${product.id}`)}
              className="text-gray-700 border-b border-black py-3 font-bold text-md"
            >
              Read More
            </button>
          </div>
          <div className="flex flex-row mt-5 gap-12 text-center items-center justify-between">
            <div className="flex text-sm gap-2 text-gray-800 items-center justify-center">
              <ion-icon name="alarm-outline"></ion-icon>5 min
            </div>
            <div className="flex text-sm gap-2 text-gray-800 items-center justify-center">
              <ion-icon name="calendar-outline"></ion-icon> 12th Oct 2023
            </div>
          </div>
        </div>
      </section>

      <button className="text-gray-700 border-b border-black mb-8 pb-3 font-bold text-md">
        View All Post
      </button>
    </div>
  );
}

export default Blogs;
