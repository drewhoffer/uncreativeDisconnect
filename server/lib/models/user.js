"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// Create form schema
const userSchema = new mongoose_1.default.Schema({
    uid: {
        type: String
    },
    email: {
        type: String,
    },
});
// Create form model
const User = mongoose_1.default.model("user", userSchema);
exports.default = User;
//# sourceMappingURL=user.js.map