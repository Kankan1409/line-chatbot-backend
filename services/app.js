const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const bodyParser = require('body-parser');
const path = require('path');
const indexRoutes = require('../routes/index');
const { typeDefs, resolvers } = require('./graphql/index'); // ✅ นำเข้า GraphQL Schema
const { sequelize } = require("../models"); // Import Sequelize instance
const db = require("../models"); 

const app = express();
app.use(bodyParser.json()); // รองรับ JSON ในคำขอ
app.use(express.static(path.join(__dirname, '../assets')));

// ฟังก์ชันเริ่มต้นเซิร์ฟเวอร์
async function startServer() {
  await db.sequelize.authenticate(); // ✅ ตรวจสอบการเชื่อมต่อฐานข้อมูล
  const server = new ApolloServer({
      typeDefs,
      resolvers,
      context: { models: db } // ✅ โหลด models จาก `models/index.js`
  });

  await server.start();
  server.applyMiddleware({ app });

  console.log(`🚀 Apollo Server ready at http://localhost:5000${server.graphqlPath}`);
}

startServer();

// ใช้ Routes
app.use('/', indexRoutes);
app.use('/line', indexRoutes);

// เริ่มเซิร์ฟเวอร์ Express
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
    console.log(`✅ Server is running on port ${PORT}`);
    await startServer(); // ✅ เรียกใช้งาน GraphQL Server
});

module.exports = app;
