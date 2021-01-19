"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const secret_1 = __importDefault(require("../../secret"));
if (!firebase_admin_1.default.apps.length) {
    firebase_admin_1.default.initializeApp({
        credential: firebase_admin_1.default.credential.cert({
            privateKey: secret_1.default.private_key,
            clientEmail: secret_1.default.client_email,
            projectId: secret_1.default.project_id,
        }),
    });
}
exports.default = firebase_admin_1.default;
//# sourceMappingURL=admin.js.map