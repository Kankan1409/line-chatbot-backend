const { ProductCategories } = require("../../../../models");

const deleteProductCategories = async (parent, { id }, context, info) => {
    try {
        const productCategoriesid = parseInt(id, 10);
        const productCategories = await ProductCategories.findOne({ where: { id: productCategoriesid } });

        if (!productCategories) {
            console.error(`❌ ProductCategories with ID ${productCategoriesid} not found`);
            return "ProductCategories not found";
        }

        await productCategories.destroy();
        return `✅ ProductCategories with ID ${productCategoriesid} deleted successfully`;
    } catch (error) {
        console.error("❌ Error deleting ProductCategories:", error);
        throw new Error(`Failed to delete ProductCategories: ${error.message}`);
    }
};

module.exports = { deleteProductCategories };
