const { Product } = require("../../../../models");

const createProduct = async (parent, { category_id, products_name, price, stock, description}, context, info) => {
    try {
        const product = await Product.create({ 
            category_id, 
            products_name, 
            price, 
            stock, 
            description
        });
        return product;
    } catch (error) {
        console.error("❌ Error while creating Product:", error); 
        throw new Error("Failed to create Product: " + error.message);
    }
};

module.exports = { createProduct };