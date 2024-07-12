import mongoose from "mongoose";

async function dbconnection(url) {
  try {
    const DBoptions = {
      dbname: "food",
    };
    await mongoose.connect(url, DBoptions);
    console.log("Database connection successful");
  } catch (error) {
    console.log("Database connection error: ", error);
  }
}

export default dbconnection;
