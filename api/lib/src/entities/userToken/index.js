"use strict";
/**
 * @file This file builds and exports the makeUserToken function with it's dependencies.
 * @author Trent Thompson
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Custom imports
const userToken_1 = __importDefault(require("./userToken"));
// Build and export the makeToken function
exports.default = userToken_1.default();
//# sourceMappingURL=index.js.map