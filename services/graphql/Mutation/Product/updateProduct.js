const { Product } = require("../../../../models");
const { ProductCategories } = require("../../../../models");

const updateProduct = async (parent, { id, category_id, products_name: products_name, price, stock, description}, context, info) => {
    try {
        const product = await Product.findByPk(id, {
            include: [{ model: ProductCategories, as: "categories" }] // ✅ โหลดข้อมูล product พร้อมกัน
        });

        if (!product) {
            throw new Error("❌ productDet not found");
        }

        await product.update({
            category_id: category_id || product.category_id,
            products_name: products_name || product.products_name,
            price: price || product.price,
            stock: stock || product.stock,
            description: description || product.description
        });

        const updatedproduct = await Product.findByPk(id, {
            include: [{ model: ProductCategories, as: "categories"}] // ✅ ต้อง include product อีกรอบ
        });

        return updatedproduct;
    } catch (error) {
        console.error(" Error updating product:", error);
        throw new Error(`Failed to update product: ${error.message}`);
    }
};

module.exports = { updateProduct };
