const { gql } = require("apollo-server-express");

const userTypeDefs = gql`
    type User {
        id: ID!
        user_id: String!
        display_name: String
        picture_url: String
        is_active: Int
    }

    extend type Query {
        getUsers: [User]       
        getUserById(id: ID!): User  
    }

    extend type Mutation {
        addUser(user_id: String!, display_name: String, picture_url: String): User
        removeUser(id: ID!): User
    }
`;

module.exports = userTypeDefs;
