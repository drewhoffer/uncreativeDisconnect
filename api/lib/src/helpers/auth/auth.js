"use strict";
/**
 * @file This file exports the auth method, which is used
 * to protect any routes that require specified access
 * @author Trent Thompson
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Custom imports
const admin_1 = __importDefault(require("../firebase/admin"));
const http_error_1 = __importDefault(require("../http/http-error"));
const firebase_1 = __importDefault(require("../firebase/firebase"));
/**
 * Makes sure user is root before allowing access.
 * @function
 * @param {Object} httpRequest - The http request
 * @param {String} requiredPermission - The required level of permission
 * @param {Function} next - call if auth is valid
 * @return {Object} Returns an error or moves to endpoint
 */
async function auth(httpRequest, requiredPermission, next) {
    var _a, _b;
    try {
        // Pull out headers
        const { headers } = httpRequest;
        // Make sure auth header starts with Bearer
        if ((_a = headers === null || headers === void 0 ? void 0 : headers.authorization) === null || _a === void 0 ? void 0 : _a.startsWith("Bearer ")) {
            // Get the id token
            const idToken = headers.authorization.replace("Bearer ", "");
            // Decode the token
            const decodedToken = await admin_1.default.auth().verifyIdToken(idToken);
            // Find the user
            const user = await firebase_1.default.firestore().collection("users").doc(decodedToken.uid).get();
            // Check if the user has required permissions
            if (!requiredPermission.includes((_b = user.data()) === null || _b === void 0 ? void 0 : _b.permission)) {
                return http_error_1.default({ statusCode: 401, errorMessage: "Unauthorized." });
            }
            // Call the next function and return
            return await next(httpRequest, user.data());
        }
        else {
            return http_error_1.default({ statusCode: 401, errorMessage: "Authorization header missing." });
        }
    }
    catch (error) {
        return http_error_1.default({ statusCode: 404, errorMessage: "User not found." });
    }
}
exports.default = auth;
//# sourceMappingURL=auth.js.map