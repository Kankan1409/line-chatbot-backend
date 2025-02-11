const userTypeDefs = require("./user");
const memberTypeDefs = require("./member");
const productTypesTypeDefs = require("./productTypes");

const baseTypeDefs = `
    type Query
    type Mutation
`;

module.exports = [
    baseTypeDefs, 
    userTypeDefs, 
    memberTypeDefs,
    productTypesTypeDefs,
];
