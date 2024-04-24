import axios from 'axios';
import API_ROUTES from '../API_ROUTES/index'


const fetchAllProducts = async () => {
    try {
        const response = await axios.get(API_ROUTES.Products.getAllProducts);
        return (response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
}

export default fetchAllProducts