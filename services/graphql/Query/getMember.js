const { Member } = require("../../../models");

const getMember = async (parent, { offset = 0, pageSize = 10 }, context, info) => {
  try {
    const members = await Member.findAll({ 
      offset: offset,
      limit: pageSize,
    });
    return members;
  } catch (error) {
    console.error("❌ Error fetching Member:", error);
    throw new Error(`Failed to get Member: ${error.message}`);
  }
};

const getMemberById = async (parent, { id }, context, info) => {
  try {
    const memberid = parseInt(id, 10);
    const member = await Member.findOne({ where: { id: memberid } });

    if (!member) {
      console.error(`❌ Member with ID ${memberid} not found`);
      return null; 
    }
    return member;
  } catch (error) {
    console.error("❌ Error fetching Member:", error);
    throw new Error(`Failed to get Member: ${error.message}`);
  }
};

module.exports = { getMember, getMemberById };
