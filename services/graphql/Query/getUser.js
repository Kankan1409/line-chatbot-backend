const users = [];

const getUser = (parent, { id }, context, info) => {
    return users.find(user => user.id === id);
};

module.exports = { getUser };
