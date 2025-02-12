const { Product } = require("../../../models");

const getProduct = async () => {
  try {
    return await Product.findAll();
  } catch (error) {
    console.error("❌ Error fetching Product:", error);
    throw new Error(`Failed to get Product: ${error.message}`);
  }
};

const getProductById = async (parent, { id }, context, info) => {
  try {
    const productid = parseInt(id, 10); // ✅ แปลง `id` เป็น Integer
    const product = await Product.findOne({ where: { id: productid } });
    if (!product) {
      console.error(`❌ Product with ID ${productid} not found`);
      return null; 
    }
    return product;
  } catch (error) {
    console.error("❌ Error fetching Product:", error);
    throw new Error(`Failed to get Product: ${error.message}`);
  }
};

module.exports = { getProduct , getProductById};