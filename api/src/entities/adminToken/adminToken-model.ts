/**
 * @file This file exports the mongoose AdminToken model.
 * @author Trent Thompson
*/



// installed imports
import mongoose from "mongoose";

// Custom imports
import Token from "../token/token-model";

// Create the userToken
Token.discriminator("admin_token", new mongoose.Schema({}));

const AdminToken = mongoose.model("admin_token");

// Export the 
export default AdminToken;