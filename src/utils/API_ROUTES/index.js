// apiRoutes.js

const BASE_URL = 'https://fakestoreapi.com'; // Replace this with your API base URL

const API_ROUTES = {

  Products: {
    getAllProducts: `${BASE_URL}/products`,
    getProductById: id => `${BASE_URL}/products/${id}`,
    getAllCategories: `${BASE_URL}/products/categories`,
    getProductsInCategory: id => `${BASE_URL}/products/category/${id}`,
  },

  Cart: {
    
  }
  // Add more routes as needed
};

export default API_ROUTES;
