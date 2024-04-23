
const addToCart = (product) => {
  const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const updatedCartItems = [...existingCartItems, product];
  localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  alert("Product added to cart!");
};

export default addToCart