const Prod_Det = require("../../../../models/productDetails");

const createProdDet = async (parent, { product_id, attribute_name,attribute_value, remaining }, context, info) => {
    try {
        const P_Details = await Prod_Det.create({ 
            product_id, 
            attribute_name, 
            attribute_value,
            remaining
        });
        return P_Details;
    } catch (error) {
        console.error("❌ Error while creating product details:", error);
        throw new Error("Failed to create product details: " + error.message);
    }
};

module.exports = { createProdDet };