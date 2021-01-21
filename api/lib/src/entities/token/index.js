"use strict";
/**
 * @file This file builds and exports the makeToken function with it's dependencies.
 * @author Trent Thompson
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Installed imports
const validator_1 = require("validator");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// Custom imports
const token_1 = __importDefault(require("./token"));
// Build and export the makeToken function
exports.default = token_1.default(validator_1.isEmail, jsonwebtoken_1.default.sign);
//# sourceMappingURL=index.js.map