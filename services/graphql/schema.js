const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    user_id: String!
    display_name: String
    picture_url: String
    is_active: Int
    created_at: String
    updated_at: String
  }

  type Query {
    getUser(user_id: String!): User
    getUsers: [User]
  }

  type Mutation {
    createUser(user_id: String!, display_name: String, picture_url: String): User
  }
`;

module.exports = typeDefs;
