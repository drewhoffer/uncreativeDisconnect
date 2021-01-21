/**
 * @file This file builds and exports the makeToken function with it's dependencies.
 * @author Trent Thompson
*/



// Installed imports
import { isEmail } from "validator";
import jsonwebtoken from "jsonwebtoken";

// Custom imports
import buildMakeToken from "./token";

// Build and export the makeToken function
export default buildMakeToken(isEmail, jsonwebtoken.sign);
