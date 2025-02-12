const { ProductCategories } = require("../../../../models");

const createProductCategories = async (parent, { categories}, context, info) => {
    try {
        const productCategories = await ProductCategories.create({ 
            categories
        });
        return productCategories;
    } catch (error) {
        console.error("❌ Error while creating ccategories:", error); 
        throw new Error("Failed to create ccategories: " + error.message);
    }
};

module.exports = { createProductCategories };