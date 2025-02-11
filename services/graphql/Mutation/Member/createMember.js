const { Member } = require("../../../../models");

const createMember = async (parent, { name, lastname, sex, phone, name_introduc}, context, info) => {
    try {
        const member = await Member.create({ 
            name, 
            lastname, 
            sex, 
            phone, 
            name_introduc 
        });
        return member;
    } catch (error) {
        console.error("❌ Error while creating user:", error); 
        throw new Error("Failed to create user: " + error.message);
    }
};

module.exports = { createMember };