const mongoose = require("mongoose");

async function connectDB() {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    dbName: "college_event_hub",
  });
  console.log(`MongoDB Connected: ${conn.connection.host}`);
}
module.exports = connectDB;
