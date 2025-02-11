const { gql } = require("apollo-server-express");

const memberTypeDefs = gql`
    type Member {
        id: ID!
        name: String!
        lastname: String!
        sex: String
        phone: String!
        name_introduc: String
    }


    extend type Mutation {
        createMember(name: String!, lastname: String!, sex: String, phone: String!, name_introduc: String): Member
    }
`;

module.exports = memberTypeDefs;