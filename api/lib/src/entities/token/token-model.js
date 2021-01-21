"use strict";
/**
 * @file This file exports the mongoose Token model.
 * @author Trent Thompson
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// installed imports
const mongoose_1 = __importDefault(require("mongoose"));
const tokenSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: true
    }
});
const Token = mongoose_1.default.model("token", tokenSchema);
exports.default = Token;
//# sourceMappingURL=token-model.js.map