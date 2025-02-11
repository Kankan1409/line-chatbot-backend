const { Member } = require("../../../../models");

const deleteMember = async (parent, { id }, context, info) => {
    try {
        const memberid = parseInt(id, 10);
        const member = await Member.findOne({ where: { id: memberid } });

        if (!member) {
            console.error(`❌ Member with ID ${memberid} not found`);
            return "Member not found";
        }

        await member.destroy();
        return `✅ Member with ID ${memberid} deleted successfully`;
    } catch (error) {
        console.error("❌ Error deleting Member:", error);
        throw new Error(`Failed to delete Member: ${error.message}`);
    }
};

module.exports = { deleteMember };
