const Prod_Det = require("../../../../models/productDetails");
const Product = require("../../../../models/product"); // ✅ ต้องเพิ่ม Product

const updateProdDet = async (parent, { id, product_id, attribute_name, attribute_value, remaining }, context, info) => {
    try {
        const productDet = await Prod_Det.findByPk(id, {
            include: [{ model: Product, as: "product" }] // ✅ โหลดข้อมูล product พร้อมกัน
        });

        if (!productDet) {
            throw new Error("❌ productDet not found");
        }

        // ✅ อัปเดตค่า
        await productDet.update({
            product_id: product_id || productDet.product_id,
            attribute_name: attribute_name || productDet.attribute_name,
            attribute_value: attribute_value || productDet.attribute_value,
            remaining: remaining !== undefined ? remaining : productDet.remaining,
            updated_at: new Date(),
        });

        // ✅ โหลดข้อมูลใหม่พร้อม `product`
        const updatedProdDet = await Prod_Det.findByPk(id, {
            include: [{ model: Product, as: "product" }] // ✅ ต้อง include product อีกรอบ
        });

        return updatedProdDet;
    } catch (error) {
        console.error("❌ Error while updating productDet:", error);
        throw new Error("Failed to update productDet: " + error.message);
    }
};

module.exports = { updateProdDet };
