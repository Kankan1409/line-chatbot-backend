const {ProductTypes , Product} = require("../../../models");

const getProductTypes = async (parent, { offset = 0, pageSize = 10 }, context, info) => {
  try {
    const productTypes = await ProductTypes.findAll({
      offset: offset,
      limit: pageSize,
      include: [
        {
          model: Product,
          as: "product", // ✅ เพิ่ม as ให้ตรงกับ belongsTo
          attributes: ["id", "products_name", "price"],
        },
      ],
    });
    return productTypes;
  } catch (error) {
    console.error("❌ Error fetching users:", error);
    throw new Error(`Failed to get users: ${error.message}`);
  }
};

const getProductTypesById = async (parent, { id }, context, info) => {
  try {
    const ProductTypesId = parseInt(id, 10); // ✅ แปลง `id` เป็น Integer
    const productTypes = await ProductTypes.findOne({
      where: { id: ProductTypesId },
      include: [
        {
          model: Product,
          as: "product", // ✅ เพิ่ม as ให้ตรงกับ belongsTo
          attributes: ["id", "products_name", "price"],
        },
      ],
    });
    if (!productTypes) {
      console.error(`❌ User with ID ${ProductTypesId} not found`);
      return null; // ✅ คืน `null` ถ้าไม่พบ User
    }
    return productTypes;
  } catch (error) {
    console.error("❌ Error fetching user:", error);
    throw new Error(`Failed to get user: ${error.message}`);
  }
};

module.exports = { getProductTypes, getProductTypesById };