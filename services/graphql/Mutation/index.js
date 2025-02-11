const fs = require("fs");
const path = require("path");

const mutationResolvers = {};

// ✅ โหลดทุกไฟล์และโฟลเดอร์ย่อยใน `Mutation/`
fs.readdirSync(__dirname).forEach(folder => {
  const folderPath = path.join(__dirname, folder);

  // ✅ ถ้าเป็นโฟลเดอร์ (เช่น `User/`)
  if (fs.lstatSync(folderPath).isDirectory()) {
    fs.readdirSync(folderPath).forEach(file => {
      const resolver = require(path.join(folderPath, file));
      Object.assign(mutationResolvers, resolver);
    });
  } else if (folder !== "index.js") {
    // ✅ ถ้าเป็นไฟล์ที่อยู่ตรง `Mutation/`
    const resolver = require(folderPath);
    Object.assign(mutationResolvers, resolver);
  }
});

module.exports = mutationResolvers;
