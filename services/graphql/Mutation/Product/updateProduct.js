const { Product } = require("../../../../models");

const updateProduct = async (parent, { id, products_name: products_name, price, stock, description}, context, info) => {
    try {
        const productid = parseInt(id, 10);
        const product = await Product.findOne({ where: { id: productid } });

        if (!product) {
            console.error(` Product with ID ${productid} not found`);
            return null;
        }

        await product.update({
            products_name: products_name || product.products_name,
            price: price || product.price,
            stock: stock || product.stock,
            description: description || product.description
        });

        return product;
    } catch (error) {
        console.error(" Error updating product:", error);
        throw new Error(`Failed to update product: ${error.message}`);
    }
};

module.exports = { updateProduct };
