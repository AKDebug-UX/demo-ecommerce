import React, { useEffect, useState } from "react";
import ProductCard from "./productCard.jsx";
import fetchAllProducts from '../../utils/Products/GetAllProducts.js'
import FilterBar from "./filterBar.jsx";

export default function productListing() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
        try {
            const allProducts = await fetchAllProducts();
            setProducts(allProducts);
        } catch (error) {
           console.error('Error fetching Products', error)
        }
    };

    fetchProductData();
}, []);

  return (
    <>
      <FilterBar />
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4 md:mx-16 mt-20">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
