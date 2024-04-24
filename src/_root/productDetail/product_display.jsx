import React, { useEffect, useState } from "react";
import fetchProductById from "../../utils/Products/GetProductById";
import { useParams } from "react-router-dom";
import removeBackground from "../../utils/Products/removeImageBackground";

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
  }, [productId]); // Include productId in the dependency array
  return (
    <div>
      <section className="product-display">
        {product ? (
          <div className="grid grid-cols-1 md:grid-cols-2 md:m-10 md:mx-28">
            <div className="col ">
              <div className="image-display">
                <img src={removeBackground(product.image)} className="bg-gray-300 p-20 w-96" alt="" />
              </div>
            </div>

            <div className="col">
              <div className="content">
                <h1 className="text-4xl uppercase">{product.title}</h1>
                <span className="price text-gray-300 text-lg pb-8">
                  ${product.price}
                </span>
                <p className="description text-gray-500 text-md mt-6">
                    {product.description}
                </p>
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
