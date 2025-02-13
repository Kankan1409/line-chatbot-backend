const userTypeDefs = require("./user");
const memberTypeDefs = require("./member");
const productTypesTypeDefs = require("./productTypes");
const productTypeDefs = require("./product");
const productCategoriesTypeDefs = require("./ProductCategories");
const prodDetTypeDefs = require("./ProdDet");

const baseTypeDefs = `
    type Query
    type Mutation
`;

module.exports = [
    baseTypeDefs, 
    userTypeDefs, 
    memberTypeDefs,
    productTypesTypeDefs,
    productTypeDefs,
    productCategoriesTypeDefs,
    prodDetTypeDefs
];
