const express = require("express");
const { getUsers, getUserById } = require("../services/graphql/Query/getUser");
const { getMember, getMemberById } = require("../services/graphql/Query/getMember");

const router = express.Router();

/*-------------------------------------User------------------------------------- */

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

/*-------------------------------------Member------------------------------------- */

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

/*-------------------------------------Product------------------------------------- */
// 📌 ดึงข้อมูลสินค้าทั้งหมด
router.get("/api/products", async (req, res) => {
  try {
    const products = await getProduct();
    res.json(products);
  } catch (error) {
    console.error("❌ Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// 📌 ดึงข้อมูลสินค้าตาม ID
router.get("/api/products/:id", async (req, res) => {
  try {
    const product = await getProductById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);  
  } catch (error) {
    console.error("❌ Error fetching product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
