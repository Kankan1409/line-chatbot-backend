const express = require("express");
const ProductTypes = require("../models/productTypes");

const router = express.Router();

// 📌 GET - ดึงข้อมูล ProductTypes ทั้งหมด
router.get("/api/product-types", async (req, res) => {
    try {
        const productTypes = await ProductTypes.findAll();
        res.json(productTypes);
    } catch (error) {
        console.error("❌ Error fetching product types:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// 📌 GET - ดึงข้อมูล ProductTypes ตาม ID
router.get("/api/product-types/:id", async (req, res) => {
    try {
        const productType = await ProductTypes.findByPk(req.params.id);
        if (!productType) {
            return res.status(404).json({ error: "ProductType not found" });
        }
        res.json(productType);
    } catch (error) {
        console.error("❌ Error fetching product type:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// 📌 POST - เพิ่มข้อมูล ProductTypes
router.post("/api/product-types", async (req, res) => {
    try {
        const { product_id, typeName, remaining } = req.body;
        const newProductType = await ProductTypes.create({
            product_id,
            typeName,
            remaining
        });
        res.status(201).json(newProductType);
    } catch (error) {
        console.error("❌ Error creating product type:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// 📌 PUT - อัพเดทข้อมูล ProductTypes
router.put("/api/product-types/:id", async (req, res) => {
    try {
        const { product_id, typeName, remaining } = req.body;
        const productType = await ProductTypes.findByPk(req.params.id);
        if (!productType) {
            return res.status(404).json({ error: "ProductType not found" });
        }

        await productType.update({
            product_id: product_id || productType.product_id,
            typeName: typeName || productType.typeName,
            remaining: remaining !== undefined ? remaining : productType.remaining
        });

        res.json(productType);
    } catch (error) {
        console.error("❌ Error updating product type:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// 📌 DELETE - ลบข้อมูล ProductTypes
router.delete("/api/product-types/:id", async (req, res) => {
    try {
        const productType = await ProductTypes.findByPk(req.params.id);
        if (!productType) {
            return res.status(404).json({ error: "ProductType not found" });
        }

        await productType.destroy();
        res.json({ message: "ProductType deleted successfully" });
    } catch (error) {
        console.error("❌ Error deleting product type:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
