import React, { useEffect, useState } from "react";
import API_ROUTES from "../../utils/API_ROUTES/index.js";
import ProductCard from "./productCard.jsx";

import axios from "axios";
import FilterBar from "./filterBar.jsx";

export default function productListing() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await axios.get(API_ROUTES.Products.getAllProducts);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchAllProducts();
  }, []);

  return (
    <>
      <FilterBar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:mx-16 mt-20">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
