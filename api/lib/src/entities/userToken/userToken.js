"use strict";
/**
 * @file This file exports the buildMakeUserToken function,
 * which is used to create the makeUserToken function with it's dependencies.
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
 * Builds the makeUserToken function with the injected dependencies.
 * @function
 * @return {Function} Returns the makeAUserToken function.
 */
function buildMakeUserToken() {
    /**
    * Makes a userToken object.
    * @function
    * @param {Object} userTokenInfo – The necessary info to create a User Token object.
    * @return {Object} Returns an Object with getters for User Token object fields.
    */
    return function makeUserToken(userTokenInfo) {
        // Make sure we have the required info
        if (!userTokenInfo) {
            required_param_1.default("User Token Info");
        }
        // Make a regular token
        const baseToken = token_1.default(userTokenInfo);
        // Return getter of the adminToken
        return Object.freeze(Object.assign({}, baseToken));
    };
}
exports.default = buildMakeUserToken;
//# sourceMappingURL=userToken.js.map