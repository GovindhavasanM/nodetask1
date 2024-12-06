const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://MSanthosh:DlZ6I7SPotpFZ9Tr@cluster0.se47z.mongodb.net/RecipeManager");
    console.log("Database connected");
  } catch (error) {
    console.log("Database connection failed");
  }
};

module.exports = connectDB;
