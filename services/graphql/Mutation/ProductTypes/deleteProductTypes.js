const ProductTypes = require("../../../../models/productTypes");

const deleteProductTypes = async (parent, { id }, context, info) => {
    try {
        const productType = await ProductTypes.findByPk(id);
        if (!productType) {
            throw new Error("ProductType not found");
        }

        await productType.destroy(); // ✅ ลบรายการ

        return { message: "ProductType deleted successfully" }; // ✅ คืนค่าเป็น Object `{ message: "..." }`
    } catch (error) {
        console.error("❌ Error while deleting product type:", error);
        throw new Error("Failed to delete product type: " + error.message);
    }
};

module.exports = { deleteProductTypes };
