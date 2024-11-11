const axios = require('axios');

class ProductsService {
    async getProducts() {
        try {
            const res = await axios.get('https://dummyjson.com/products');
            return res.data;
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    }

    async getProductById(id) {
        try {
            const res = await axios.get(`https://dummyjson.com/products/${id}`);
            return res.data;
        } catch (error) {
            console.error(`Error fetching product with ID ${id}:`, error);
            throw error;
        }
    }

    async createProduct(productData) {
        try {
            const res = await axios.post('https://dummyjson.com/products/add', productData);
            return res.data;
        } catch (error) {
            console.error('Error creating product:', error);
            throw error;
        }
    }

    async updateProduct(id, productData) {
        try {
            const res = await axios.put(`https://dummyjson.com/products/${id}`, productData);
            return res.data;
        } catch (error) {
            console.error(`Error updating product with ID ${id}:`, error);
            throw error;
        }
    }

    async deleteProduct(id) {
        try {
            const res = await axios.delete(`https://dummyjson.com/products/${id}`);
            return res.data;
        } catch (error) {
            console.error(`Error deleting product with ID ${id}:`, error);
            throw error;
        }
    }
}

module.exports = new ProductsService();
