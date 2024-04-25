import { toast } from "react-toastify";

const addToCart = (product) => {
  const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const updatedCartItems = [...existingCartItems, product];
  localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  // alert("Product added to cart!");
  toast.success("Product added to cart!", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export default addToCart