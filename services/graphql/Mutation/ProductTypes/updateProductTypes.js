const ProductTypes = require("../../../../models/productTypes");
const Product = require("../../../../models/product");

const updateProductTypes = async (parent, { id, product_id, typeName, remaining }, context, info) => {
    try {
        const productType = await ProductTypes.findByPk(id, {
            include: [{ model: Product, as: "product" }]
        }); 
        if (!productType) {
            throw new Error("ProductType not found");
        }

        // ✅ อัพเดทค่า
        await productType.update({
            product_id: product_id || productType.product_id,
            typeName: typeName || productType.typeName,
            remaining: remaining !== undefined ? remaining : productType.remaining,
            updated_at: new Date(), // อัพเดทเวลา
        });

        const updatedProductType = await ProductTypes.findByPk(id, {
            include: [{ model: Product, as: "product" }]
        });

        return updatedProductType;
    } catch (error) {
        console.error("❌ Error while updating product type:", error);
        throw new Error("Failed to update product type: " + error.message);
    }
};

module.exports = { updateProductTypes };
