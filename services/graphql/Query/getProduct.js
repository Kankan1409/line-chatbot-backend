const { Product , ProductCategories} = require("../../../models");

const getProduct = async (parent, { offset = 0, pageSize = 10 }, context, info) => {
  try {
    const products = await Product.findAll({
      offset: offset,
      limit: pageSize,
      include: [
        {
            model: ProductCategories,  
            as: "categories", // ✅ เพิ่ม as ให้ตรงกับ belongsTo
            attributes: ["id", "categories"],
        },
      ],
    });

    return products;
  } catch (error) {
    console.error("❌ Error fetching Product:", error);
    throw new Error(`Failed to get Product: ${error.message}`);
  }
};

const getProductById = async (parent, { id }, context, info) => {
  try {
    const productid = parseInt(id, 10); // ✅ แปลง `id` เป็น Integer
    const product = await Product.findOne({ 
      where: { id: productid },
      include: [
        {
            model: ProductCategories,  
            as: "categories", // ✅ เพิ่ม as ให้ตรงกับ belongsTo
            attributes: ["id", "categories"],
        },
      ],
    });
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