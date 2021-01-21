"use strict";
/**
 * @file This file exports the mongoose UserToken model.
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
token_model_1.default.discriminator("user_token", new mongoose_1.default.Schema({}));
const UserToken = mongoose_1.default.model("user_token");
// Export the 
exports.default = UserToken;
//# sourceMappingURL=userToken-model.js.map