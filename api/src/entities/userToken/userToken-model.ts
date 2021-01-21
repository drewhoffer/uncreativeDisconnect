/**
 * @file This file exports the mongoose UserToken model.
 * @author Trent Thompson
*/



// installed imports
import mongoose from "mongoose";

// Custom imports
import Token from "../token/token-model";

// Create the userToken
Token.discriminator("user_token", new mongoose.Schema({}));

const UserToken = mongoose.model("user_token");

// Export the 
export default UserToken;