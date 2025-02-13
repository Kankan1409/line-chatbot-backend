// ✅ เพิ่ม resolver ทีละไฟล์แบบกำหนดเอง
const {getUsers, getUserById} = require("./getUser");
const {getMember, getMemberById} = require("./getMember");
const {getProductTypes, getProductTypesById} = require("./getProductTypes");
const {getProduct, getProductById} = require("./getProduct");
const {getProductCategories, getProductCategoriesById} = require("./getProductCategories");
const {getProdDet, getProdDetById} = require("./getProdDet");

// ✅ รวม resolver ทั้งหมดเข้าด้วยกัน
const queryResolvers = {
    getUsers,
    getUserById,
    getMember,
    getMemberById,
    getProductTypes,
    getProductTypesById,
    getProduct,
    getProductById,
    getProductCategories,
    getProductCategoriesById,
    getProdDet,
    getProdDetById,
};

module.exports = queryResolvers;
