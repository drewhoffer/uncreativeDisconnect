"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Test file so trent can get a token without frontend
const firebase_1 = __importDefault(require("../firebase/firebase"));
async function login(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).send("Bad request. No POST body.");
    }
    // Try to sign in with auth provider
    try {
        const { user } = await firebase_1.default.auth().signInWithEmailAndPassword(email, password);
        // Get auth token and return
        const token = await user.getIdToken();
        return res.status(200).send({ token });
    }
    catch (error) {
        console.log(error);
        return res.status(400).send("Something went wrong.");
    }
}
exports.default = login;
//# sourceMappingURL=login.js.map