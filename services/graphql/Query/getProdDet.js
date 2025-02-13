const { Prod_Det, Product } = require("../../../models");
const db = require("../../../models");
const getProdDet = async (parent, { offset = 0, pageSize = 10 }, context, info) => {
  try {
    const productDetails = await Prod_Det.findAll({ 
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
    return productDetails;
  } catch (error) {
    console.error("❌ Error fetching productDetails:", error);
    throw new Error(`Failed to get productDetails: ${error.message}`);
  }
};

const getProdDetById = async (parent, { id }, context, info) => {
  try {
    const prodDetid = parseInt(id, 10);
    const productDetails = await Prod_Det.findOne({ 
      where: { id: prodDetid },
      include: [
        {
            model: Product,  
            as: "product", // ✅ เพิ่ม as ให้ตรงกับ belongsTo
            attributes: ["id", "products_name", "price"],
        },
      ],
    });

    if (!productDetails) {
      console.error(`❌ productDetails with ID ${prodDetid} not found`);
      return null; 
    }
    return productDetails;
  } catch (error) {
    console.error("❌ Error fetching productDetails:", error);
    throw new Error(`Failed to get productDetails: ${error.message}`);
  }
};

module.exports = { getProdDet, getProdDetById };
