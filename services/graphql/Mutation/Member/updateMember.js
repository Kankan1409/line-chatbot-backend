const { Member } = require("../../../../models");

const updateMember = async (parent, { id, name, lastname, sex, phone, name_introduc }, context, info) => {
    try {
        const memberid = parseInt(id, 10);
        const member = await Member.findOne({ where: { id: memberid } });

        if (!member) {
            console.error(`❌ Member with ID ${memberid} not found`);
            return null;
        }

        await member.update({
            name: name || member.name,
            lastname: lastname || member.lastname,
            sex: sex || member.sex,
            phone: phone || member.phone,
            name_introduc: name_introduc || member.name_introduc
        });

        return member;
    } catch (error) {
        console.error("❌ Error updating Member:", error);
        throw new Error(`Failed to update Member: ${error.message}`);
    }
};

module.exports = { updateMember };
