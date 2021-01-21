"use strict";
/**
 * @file This file builds and exports the makeAdminToken function with it's dependencies.
 * @author Trent Thompson
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Custom imports
const adminToken_1 = __importDefault(require("./adminToken"));
// Build and export the makeToken function
exports.default = adminToken_1.default();
//# sourceMappingURL=index.js.map