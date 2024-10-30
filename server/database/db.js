import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@crud-app.nia2b.mongodb.net/?retryWrites=true&w=majority&appName=crud-app`;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log(`Error while connecting to database `, error);
  }
};

export default Connection;
