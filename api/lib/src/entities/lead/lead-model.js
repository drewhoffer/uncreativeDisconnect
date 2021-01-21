"use strict";
/**
 * @file This file exports the mongoose Lead model.
 * @author Trent Thompson
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// installed imports
const mongoose_1 = __importDefault(require("mongoose"));
const leadSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});
const Lead = mongoose_1.default.model("lead", leadSchema);
exports.default = Lead;
//# sourceMappingURL=lead-model.js.map