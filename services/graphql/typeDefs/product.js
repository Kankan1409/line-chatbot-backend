const { gql } = require("apollo-server-express");

const productTypeDefs= gql`
    type ProductCategories {
        id: ID!
        categories: String!
    }

    type Product {
        id: ID!
        category_id: Int!
        categories: ProductCategories
        products_name: String!
        price: Int
        stock: Int
        description: String
    }

    extend type Query {
        getProduct(offset: Int, pageSize: Int): [Product!]
        getProductById(id: ID!): Product
    }

    extend type Mutation {
        createProduct(category_id: Int!, products_name: String!, price: Int, stock: Int, description: String): Product
        updateProduct(id: ID!, category_id: Int!, products_name: String, price: Int, stock: Int, description: String): Product
        deleteProduct (id: ID!): String
    }
`;

module.exports = productTypeDefs;