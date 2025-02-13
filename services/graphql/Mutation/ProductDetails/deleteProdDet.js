const Prod_Det = require("../../../../models/productDetails");

const deleteProdDet = async (parent, { id }, context, info) => {
    try {
        const productDet = await Prod_Det.findByPk(id);
        if (!productDet) {
            throw new Error("productDet not found");
        }

        await productDet.destroy(); // ✅ ลบรายการ

        return { message: "productDet deleted successfully" }; // ✅ คืนค่าเป็น Object `{ message: "..." }`
    } catch (error) {
        console.error("❌ Error while deleting productDet:", error);
        throw new Error("Failed to delete pproductDet: " + error.message);
    }
};

module.exports = { deleteProdDet };
