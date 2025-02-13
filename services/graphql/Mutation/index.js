const mutationResolvers = {};

// ✅ เพิ่ม resolver ทีละไฟล์แบบกำหนดเอง
const createMember = require("./Member/createMember");
const updateMember = require("./Member/updateMember");
const deleteMember = require("./Member/deleteMember");

const createProduct = require("./Product/createProduct");
const updateProduct = require("./Product/updateProduct");
const deleteProduct = require("./Product/deleteProduct");
const productTypes = require("./ProductTypes");
const productDetails = require("./ProductDetails");

// ✅ รวม resolver ทั้งหมดเข้าด้วยกัน
Object.assign(mutationResolvers, 
  createMember, 
  updateMember, 
  deleteMember,
  createProduct, 
  updateProduct, 
  deleteProduct,
  ...Object.values(productTypes),
  ...Object.values(productDetails)
);
console.log("✅ mutation Resolvers Loaded:", mutationResolvers);
module.exports = mutationResolvers;
