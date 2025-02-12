const { ProductCategories } = require("../../../models");

const getProductCategories = async () => {
  try {
    return await ProductCategories.findAll();
  } catch (error) {
    console.error("❌ Error fetching ProductCategories:", error);
    throw new Error(`Failed to get ProductCategories: ${error.message}`);
  }
};

const getProductCategoriesById = async (parent, { id }, context, info) => {
  try {
    const productCategoriesid = parseInt(id, 10); // ✅ แปลง `id` เป็น Integer
    const productCategories = await ProductCategories.findOne({ where: { id: productCategoriesid } });
    if (!productCategories) {
      console.error(`❌ productCategories with ID ${productCategoriesid} not found`);
      return null; 
    }
    return productCategories;
  } catch (error) {
    console.error("❌ Error fetching productCategories:", error);
    throw new Error(`Failed to get productCategories: ${error.message}`);
  }
};

module.exports = { getProductCategories , getProductCategoriesById};