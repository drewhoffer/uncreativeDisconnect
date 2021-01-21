/**
 * @file This file exports the mongoose Token model.
 * @author Trent Thompson
*/



// installed imports
import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	token: { 
		type: String, 
		required: true
	}
});

const Token = mongoose.model("token", tokenSchema);

export default Token;