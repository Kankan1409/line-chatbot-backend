const fs = require("fs");
const path = require("path");

const queryResolvers = {};

// อ่านโฟลเดอร์ทั้งหมดภายใน `Query/`
fs.readdirSync(__dirname).forEach(folder => {
    const folderPath = path.join(__dirname, folder);

     // ✅ ถ้าเป็นโฟลเดอร์ (เช่น `User/`)
    if (fs.lstatSync(folderPath).isDirectory()) {
        fs.readdirSync(folderPath).forEach(file => {
          const resolver = require(path.join(folderPath, file));
          Object.assign(queryResolvers, resolver);
        });
    } else if (folder !== "index.js") {
        // โหลดไฟล์ที่อยู่ตรง `Query/` โดยตรง (ถ้ามี)
        const resolver = require(folderPath);
        Object.assign(queryResolvers, resolver);
    }
});

module.exports = queryResolvers;
