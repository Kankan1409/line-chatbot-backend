const { Product } = require("../../../../models");

const deleteProduct = async (parent, { id }, context, info) => {
    try {
        const productid = parseInt(id, 10);
        const product = await Product.findOne({ where: { id: productid } });

        if (!product) {
            console.error(`❌ Member with ID ${productid} not found`);
            return "Member not found";
        }

        await product.destroy();
        return `✅ Member with ID ${productid} deleted successfully`;
    } catch (error) {
        console.error("❌ Error deleting Member:", error);
        throw new Error(`Failed to delete Member: ${error.message}`);
    }
};

module.exports = { deleteProduct };
