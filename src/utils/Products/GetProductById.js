import axios from 'axios';
import API_ROUTES from '../API_ROUTES/index'


const fetchProductById = async (id) => {
    try {
        const response = await axios.get(API_ROUTES.Products.getProductById(id));
        return response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
}

export default fetchProductById