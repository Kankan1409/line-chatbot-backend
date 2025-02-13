const { gql } = require("apollo-server-express");

const prodDetTypeDefs = gql`
    type Product {
    id: ID!
    products_name: String!
    price: Int!
    }

    type prodDet {
    id: ID!
    product_id: Int! 
    product: Product!
    attribute_value: String!
    attribute_name: String!
    remaining: Int
    }

    extend type Query {
    getProdDet(offset: Int, pageSize: Int): [prodDet!]
    getProdDetById(id: ID!): prodDet
    }

    extend type Mutation {
        createProdDet(product_id: Int!, attribute_name: String!, attribute_value: String!, remaining: Int): prodDet
        updateProdDet(id: ID!, product_id: Int!, attribute_name: String!, attribute_value: String!, remaining: Int): prodDet
        deleteProdDet(id: ID!): DeleteResponse 
    }

`;

module.exports = prodDetTypeDefs;