const express = require('express');
const router = express.Router();
const productsService = require('../services/productsService'); // Import the ProductsService

// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await productsService.getProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});

// Get product by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const product = await productsService.getProductById(id);
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: `Failed to fetch product with ID ${id}` });
    }
});

// Create a new product
router.post('/', async (req, res) => {
    const productData = req.body;
    try {
        const newProduct = await productsService.createProduct(productData);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create product' });
    }
});

// Update an existing product
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const productData = req.body;
    try {
        const updatedProduct = await productsService.updateProduct(id, productData);
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: `Failed to update product with ID ${id}` });
    }
});

// Delete a product
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await productsService.deleteProduct(id);
        res.json(deletedProduct);
    } catch (error) {
        res.status(500).json({ error: `Failed to delete product with ID ${id}` });
    }
});

module.exports = router;
