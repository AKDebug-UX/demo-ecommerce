

 function getCartItems() {
    try {
        const storedProducts = localStorage.getItem('cartItems');
        if (storedProducts) {
            console.log(storedProducts);
          return JSON.parse(storedProducts);
        } else {
          return []; // Return an empty array if no products are found in local storage
        }
      } catch (error) {
        console.error('Error fetching products from local storage:', error);
        return []; // Return an empty array in case of any errors
      }
  }
  
  export default getCartItems