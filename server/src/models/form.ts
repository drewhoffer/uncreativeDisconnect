import mongoose from "mongoose";

// Create form schema
const formSchema = new mongoose.Schema({
	name: {
		type: String
	},
	email: {
		type: String,
	},
	phone: {
		type: String
	}
});

// Create form model
const Form = mongoose.model("form", formSchema);

export default Form;