const { User } = require("../../../../models");

const addUser = async (parent, { user_id, display_name, picture_url }, context, info) => {
    try {
        const user = await User.create({ 
            user_id, 
            display_name, 
            picture_url 
        });
        return user;
    } catch (error) {
        console.error("❌ Error while creating user:", error); // แสดงรายละเอียด Error
        throw new Error("Failed to create user: " + error.message);
    }
};

module.exports = { addUser };
