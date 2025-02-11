const { gql } = require("apollo-server-express");

const productTypesTypeDefs = gql`
    type productTypes {
        id: ID!
        product_id: Int!
        typeName: String!
        remaining: Int
    }

    extend type Mutation {
        createProductTypes(product_id: Int!, typeName: String!, remaining: Int): productTypes
    }
`;

module.exports = productTypesTypeDefs;