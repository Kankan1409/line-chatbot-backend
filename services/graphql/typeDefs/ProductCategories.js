const { gql } = require("apollo-server-express");

const productCategoriesTypeDefs = gql`
    type ProductCategories {
        id: ID!
        categories: String!
    }

    extend type Query {
        getProductCategories(offset: Int, pageSize: Int): [ProductCategories]
        getProductCategoriesById(id: ID!): ProductCategories
    }

    extend type Mutation {
        createProductCategories(categories: String!): ProductCategories
        updateProductCategories(id: ID!, categories: String): ProductCategories
        deleteProductCategories(id: ID!): String
    }
`;

module.exports = productCategoriesTypeDefs;