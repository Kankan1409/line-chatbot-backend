const { gql } = require("apollo-server-express");

const productTypesTypeDefs = gql`
    type Product {
        id: ID!
        products_name: String!
        price: Int!
    }
    type productTypes {
        id: ID!
        product_id: Int!
        product: Product!
        typeName: String!
        remaining: Int
    }
    type DeleteResponse {
        message: String
    }

    extend type Query {
        getProductTypes(offset: Int, pageSize: Int): [productTypes]
        getProductTypesById(id: ID!): productTypes
    }
    extend type Mutation {
        createProductTypes(product_id: Int!, typeName: String!, remaining: Int): productTypes
        updateProductTypes(id: ID!, product_id: Int, typeName: String, remaining: Int): productTypes
        deleteProductTypes(id: ID!): DeleteResponse 
    }

`;

module.exports = productTypesTypeDefs;