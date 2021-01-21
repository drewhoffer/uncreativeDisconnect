"use strict";
/**
 * @file This file builds and exports the makeLead function with it's dependencies.
 * @author Trent Thompson
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Installed imports
const validator_1 = require("validator");
// Custom imports
const lead_1 = __importDefault(require("./lead"));
// Build and export the makeLead function
exports.default = lead_1.default(validator_1.isEmail);
//# sourceMappingURL=index.js.map