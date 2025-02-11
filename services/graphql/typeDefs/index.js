const userTypeDefs = require("./user");

const baseTypeDefs = `
    type Query
    type Mutation
`;

module.exports = [
    baseTypeDefs, 
    userTypeDefs, 
];
