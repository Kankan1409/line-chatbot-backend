const ProductTypes = require("../../../../models/productTypes"); // ✅ ใช้ Model ตรงๆ

const createProductTypes = async (parent, { product_id, typeName, remaining }, context, info) => {
    try {
        const productType = await ProductTypes.create({ 
            product_id, 
            typeName, 
            remaining
        });
        return productType;
    } catch (error) {
        console.error("❌ Error while creating product type:", error);
        throw new Error("Failed to create product type: " + error.message);
    }
};

module.exports = { createProductTypes };
