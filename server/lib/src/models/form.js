"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// Create form schema
const formSchema = new mongoose_1.default.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
    },
    phone: {
        type: String
    }
});
// Create form model
const Form = mongoose_1.default.model("form", formSchema);
exports.default = Form;
//# sourceMappingURL=form.js.map