"use strict";
/**
 * @file This file exports the buildMakeAdminToken function,
 * which is used to create the makeAdminToken function with it's dependencies.
 * @author Trent Thompson
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Custom imports
const required_param_1 = __importDefault(require("../../helpers/errors/required-param"));
const token_1 = __importDefault(require("../token"));
/**
 * Builds the makeAdminToken function with the injected dependencies.
 * @function
 * @return {Function} Returns the makeAdminToken function.
 */
function buildMakeAdminToken() {
    /**
    * Makes an adminToken object.
    * @function
    * @param {Object} adminTokenInfo – The necessary info to create an Admin Token object.
    * @return {Object} Returns an Object with getters for Admin Token object fields.
    */
    return function makeAdminToken(adminTokenInfo) {
        // Make sure we have the required info
        if (!adminTokenInfo) {
            required_param_1.default("Admin Token Info");
        }
        // Make a regular token
        const baseToken = token_1.default(adminTokenInfo);
        // Return getter of the adminToken
        return Object.freeze(Object.assign({}, baseToken));
    };
}
exports.default = buildMakeAdminToken;
//# sourceMappingURL=adminToken.js.map