const createProductCategories = require("./createProductCategories");
const updateProductCategories = require("./updateProductCategories");
const deleteProductCategories = require("./deleteProductCategories");

const productCategories = {
    createProductCategories,
    updateProductCategories,
    deleteProductCategories
};

module.exports = productCategories;
