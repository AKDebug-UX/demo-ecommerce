import React, { useEffect, useState } from "react";
import API_ROUTES from "../../utils/API_ROUTES/index.js";
import ProductCard from "./productCard.jsx";

import axios from "axios";
import FilterBar from "./filterBar.jsx";

export default function productListing() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAllProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(API_ROUTES.Products.getAllProducts);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchAllProducts();
  }, []);

  return (
    <>
      <FilterBar />
      {!isLoading ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:mx-16 my-20">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      ) : (
        <div className="flex gap-3 my-12 justify-center items-center">
          <div className="animate-spin rounded-full h-5 w-5 border-b-4 border-black"></div>
          Loading...
        </div>
      )}
    </>
  );
}
