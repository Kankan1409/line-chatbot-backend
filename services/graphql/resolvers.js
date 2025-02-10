const { User } = require("../../models");

const resolvers = {
  Query: {
    async getUser(_, { user_id }) {
      return await User.findOne({ where: { user_id } });
    },
    async getUsers() {
      return await User.findAll();
    }
  },
  Mutation: {
    async createUser(_, { user_id, display_name, picture_url }) {
      return await User.create({ user_id, display_name, picture_url });
    }
  }
};

module.exports = resolvers;
