import mongoose from "mongoose";

// Create form schema
const userSchema = new mongoose.Schema({
	uid: {
		type: String
	},
	email: {
		type: String,
	},
});

// Create form model
const User = mongoose.model("user", userSchema);

export default User;