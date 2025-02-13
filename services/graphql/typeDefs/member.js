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

    extend type Query {
        getMember(offset: Int, pageSize: Int): [Member]
        getMemberById(id: ID!): Member
    }

    extend type Mutation {
        createMember(name: String!, lastname: String!, sex: String, phone: String!, name_introduc: String): Member
        updateMember(id: ID!, name: String, lastname: String, sex: String, phone: String, name_introduc: String): Member
        deleteMember (id: ID!): String
    }
`;

module.exports = memberTypeDefs;