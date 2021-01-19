"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const admin_1 = __importDefault(require("../helpers/admin"));
async function addUser(email, password) {
    const user = await admin_1.default.auth().createUser({
        email,
        password,
    });
    return user.uid;
}
exports.default = addUser;
//# sourceMappingURL=addUser.js.map