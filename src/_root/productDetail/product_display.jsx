import React, { useEffect, useState } from "react";
import fetchProductById from "../../utils/Products/GetProductById";
import { useParams } from "react-router-dom";

export default function ProductDisplay() {
  const [product, setProduct] = useState(null);
  const { productId } = useParams()
  console.log(productId)

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const product = await fetchProductById(productId);
        setProduct(product);
        console.log(product)
      } catch (error) {
        console.error("Error fetching Products", error);
      }
    };

    fetchProductData();
  }); // Include productId in the dependency array

  return (
    <div>
      <section className="product-display">
        {product ? (
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="col">
              <div className="image-display">
                <img src={product.image} alt="" />
              </div>
            </div>

            <div className="col">
              <div className="content">
                <h1 className="text-2xl">{product.title}</h1>
                <span className="price text-gray-300 text-lg">
                  ${product.price}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <p className="flex justify-center h-screen items-center">Loading...</p>
        )}
      </section>
    </div>
  );
}
