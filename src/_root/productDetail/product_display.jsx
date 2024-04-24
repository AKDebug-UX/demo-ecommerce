import React, { useEffect, useState } from "react";
import fetchProductById from "../../utils/Products/GetProductById";
import { useParams } from "react-router-dom";
import removeBackground from "../../utils/Products/removeImageBackground";
import Add_to_cart from '../productDetail/add_to_cart'
export default function ProductDisplay() {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  console.log(productId);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const product = await fetchProductById(productId);
        setProduct(product);
        console.log(product);
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
                <img
                  src={product.image}
                  className=" p-4 w-96"
                  alt=""
                />
              </div>
            </div>

            <div className="col">
              <div className="content">
                <h1 className="text-4xl uppercase pb-4">{product.title}</h1>
                <p className="price text-gray-500 text-2xl">${product.price}</p>
                <br />
                <p className="price text-gray-500 text-lg pb-8">
                  {product.category}
                </p>

                <h1 className="text-gray-900 text-2xl mt-0">
                  About This Product
                </h1>
                <p className="description text-gray-500 text-md mt-6">
                  {product.description}
                </p>

                <div className="flex gap-10 items-center my-6">
                <div className="border w-20 flex justify-center items-center py-1 px-auto">
                  <button className="text-gray-900 font-semibold px-1.5">
                    -
                  </button>
                  <input type="text" value={product.quantity} className="w-8 border-none text-center" />
                  <button className="text-gray-900 font-semibold px-1.5">
                    +
                  </button>
                </div>

                <div className="add-to-cart">
                    <Add_to_cart product={product}/>
                </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="flex justify-center h-screen items-center">
            Loading...
          </p>
        )}
      </section>
    </div>
  );
}
