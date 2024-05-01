import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import fetchAllProducts from "../../utils/Products/GetAllProducts.js";

function TopPicks() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const allProducts = await fetchAllProducts();
        setProducts(allProducts);
      } catch (error) {
        console.error("Error fetching Products", error);
      }
    };

    fetchProductData();
  }, []);

  return (
    <section className="flex flex-row w-full gap-5 bg-[#fff] py-[5em] md:px-[3em] py-12 overflow-x-auto items-center justify-center">
      <Swiper
        slidesPerview={1.2}
        spaceBetween={20}
        breakpoints={{
          799: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        // pagination={{
        //   clickable: false,
        // }}
        modules={[Pagination, Autoplay]}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="flex flex-col items-center justify-center">
              <img className="w-64 md:w-84 h-64 relative" src={product.image} />
              <div className="text-left">
                <h1 className="w-[14em] text-lg mt-5 truncate font-semibold text-gray-800">
                  {product.title}
                </h1>
                <button
                  onClick={() => navigate(`/products/${product.id}`)}
                  className="text-gray-700 hover:border-b border-black text-lg"
                >
                  View More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default TopPicks;
