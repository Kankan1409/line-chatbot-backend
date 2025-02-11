const userTypeDefs = require("./user");
const memberTypeDefs = require("./member");

const baseTypeDefs = `
    type Query
    type Mutation
`;

module.exports = [
    baseTypeDefs, 
    userTypeDefs, 
    memberTypeDefs,
];
