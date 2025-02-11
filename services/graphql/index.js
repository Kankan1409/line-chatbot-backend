const typeDefs = require("./typeDefs"); // ✅ โหลด schema อัตโนมัติ
const { mutationResolvers } = require("./resolvers/mutationResolvers");
const { queryResolvers } = require("./resolvers/queryResolvers");

const resolvers = {
    Query: queryResolvers,
    Mutation: mutationResolvers,
};

module.exports = { typeDefs, resolvers };
