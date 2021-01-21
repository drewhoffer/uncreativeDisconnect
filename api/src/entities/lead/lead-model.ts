/**
 * @file This file exports the mongoose Lead model.
 * @author Trent Thompson
*/



// installed imports
import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	name: { 
		type: String, 
		required: true
	},
	phone: {
		type: String,
		required: true
	}
});

const Lead = mongoose.model("lead", leadSchema);

export default Lead;