/**
 * @file This file builds and exports the makeLead function with it's dependencies.
 * @author Trent Thompson
*/



// Installed imports
import { isEmail } from "validator";

// Custom imports
import buildMakeLead from "./lead";

// Build and export the makeLead function
export default buildMakeLead(isEmail);