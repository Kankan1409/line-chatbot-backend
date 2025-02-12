const { ProductCategories } = require("../../../../models");

const updateProductCategories = async (parent, { id, categories}, context, info) => {
    try {
        const productCatid = parseInt(id, 10);
        const productCategories = await ProductCategories.findOne({ where: { id: productCatid } });

        if (!productCategories) {
            console.error(` ProductCategories with ID ${productCatid} not found`);
            return null;
        }

        await productCategories.update({
            categories: categories || ProductCategories.categories,
        });

        return productCategories;
    } catch (error) {
        console.error(" Error updating productCategories:", error);
        throw new Error(`Failed to update productCategories: ${error.message}`);
    }
};

module.exports = { updateProductCategories };
