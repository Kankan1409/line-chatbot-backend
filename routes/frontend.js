const express = require("express");
const { getUsers, getUserById } = require("../services/graphql/Query/getUser");
const { getMember, getMemberById } = require("../services/graphql/Query/getMember");

const router = express.Router();

// 📌 ดึงรายชื่อผู้ใช้ทั้งหมด
router.get("/api/users", async (req, res) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (error) {
    console.error("❌ Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// 📌 ดึงข้อมูลผู้ใช้ตาม ID
router.get("/api/users/:id", async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("❌ Error fetching user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// 📌 ดึงรายชื่อสมาชิกทั้งหมด
router.get("/api/members", async (req, res) => {
  try {
    const members = await getMember();
    res.json(members);
  } catch (error) {
    console.error("❌ Error fetching members:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// 📌 ดึงข้อมูลสมาชิกตาม ID
router.get("/api/members/:id", async (req, res) => {
  try {
    const member = await getMemberById(req.params.id);
    if (!member) {
      return res.status(404).json({ error: "Member not found" });
    }
    res.json(member);
  } catch (error) {
    console.error("❌ Error fetching member:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
