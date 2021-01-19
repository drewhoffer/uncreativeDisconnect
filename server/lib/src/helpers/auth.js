"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const admin_1 = __importDefault(require("./admin"));
async function auth(req, res, next) {
    var _a, _b;
    try {
        // Make sure header is available
        if ((_b = (_a = req.headers) === null || _a === void 0 ? void 0 : _a.authorization) === null || _b === void 0 ? void 0 : _b.startsWith("Bearer ")) {
            const idToken = req.headers.authorization.split("Bearer ")[1];
            const decodedToken = await admin_1.default.auth().verifyIdToken(idToken);
            req["user"] = decodedToken;
        }
        else {
            return res.status(400).send("Need auth headers.");
        }
    }
    catch (_c) {
        return res.status(404).send("User not found.");
    }
    next();
}
exports.default = auth;
//# sourceMappingURL=auth.js.map