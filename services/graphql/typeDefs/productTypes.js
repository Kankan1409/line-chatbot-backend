const { gql } = require("apollo-server-express");

const productTypesTypeDefs = gql`
    type productTypes {
        id: ID!
        product_id: Int!
        typeName: String!
        remaining: Int
    }
    type DeleteResponse {
        message: String
    }

    extend type Query {
        getProductTypes: [productTypes]
        getProductTypesById(id: ID!): productTypes
    }
    extend type Mutation {
        createProductTypes(product_id: Int!, typeName: String!, remaining: Int): productTypes
        updateProductTypes(id: ID!, product_id: Int, typeName: String, remaining: Int): productTypes
        deleteProductTypes(id: ID!): DeleteResponse 
    }

`;

module.exports = productTypesTypeDefs;