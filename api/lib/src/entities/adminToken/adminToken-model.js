"use strict";
/**
 * @file This file exports the mongoose AdminToken model.
 * @author Trent Thompson
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// installed imports
const mongoose_1 = __importDefault(require("mongoose"));
// Custom imports
const token_model_1 = __importDefault(require("../token/token-model"));
// Create the userToken
token_model_1.default.discriminator("admin_token", new mongoose_1.default.Schema({}));
const AdminToken = mongoose_1.default.model("admin_token");
// Export the 
exports.default = AdminToken;
//# sourceMappingURL=adminToken-model.js.map