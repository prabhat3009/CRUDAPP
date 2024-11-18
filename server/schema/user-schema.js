import mongoose from "mongoose";
import AutoIncrement from "mongoose-sequence";

const userSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
});

// Attach AutoIncrement plugin to the schema
userSchema.plugin(AutoIncrement(mongoose), { inc_field: "userId" });

// Create the model
const User = mongoose.model("user", userSchema);

export default User;

