"use strict";
/**
 * @file This file exports the buildMakeToken function,
 * which is used to create the makeToken function with it's dependencies.
 * @author Trent Thompson
*/
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Custom imports
const errors_1 = require("../../helpers/errors/errors");
const required_param_1 = __importDefault(require("../../helpers/errors/required-param"));
/**
 * Builds the makeToken function with the injected dependencies.
 * @function
 * @param {String} isEmail - Checks if the a value is an email address
 * @param {String} tokenize - Allows us to make a token string
 * @return {Function} Returns the makeToken function.
 */
function buildMakeToken(isEmail, tokenize) {
    /**
    * Makes a token object.
    * @function
    * @param {Object} tokenInfo – The necessary info to create a Token object.
    * @return {Object} Returns an Object with getters for Token object fields.
    */
    return function makeToken(tokenInfo) {
        // Check the token info is there
        if (!tokenInfo) {
            required_param_1.default("Token Info");
        }
        // Validate and normalize the token
        const normalizedToken = normalize(validate(tokenInfo));
        return Object.freeze({
            getEmail: () => normalizedToken.email,
            getToken: () => normalizedToken.token
        });
    };
    /**
    * Returns a normalized Token object.
    * @function
    * @param {String} email – The email address to be turned to all lowercase.
    * @param {Object} otherInfo - The rest of the info associated with the token.
    * @return {Object} Returns a normalized token object.
    */
    function normalize(_a) {
        var { email } = _a, otherInfo = __rest(_a, ["email"]);
        return Object.assign(Object.assign({}, otherInfo), { email: email.toLowerCase() });
    }
    /**
    * Validates the tokenInfo to create a Token object.
    * @function
    * @param {String} email – The email of the user we are associating with the token.
    * @param {String} token – The generated token we are storing.
    * @return {Object} Returns a validated token object.
    */
    function validate({ email, token }) {
        // Check the email is there
        if (!email) {
            required_param_1.default("Email");
        }
        // Validate email is a string
        if (!(typeof email === "string" || email instanceof String)) {
            throw new errors_1.InvalidPropertyError("Email must be a string.");
        }
        // Validate the email
        if (!isEmail(email)) {
            throw new errors_1.InvalidPropertyError(`Email is invalid format.`);
        }
        // If there is no token, they we know we need to make one
        if (!token) {
            token = tokenize({ email }, process.env.JWT_SECRET);
        }
        // Otherwise make sure the incoming token is valid
        else {
            // Validate token is a string
            if (!(typeof token === "string" || token instanceof String)) {
                throw new errors_1.InvalidPropertyError("Token must be a string.");
            }
        }
        // Return the token
        return {
            token,
            email
        };
    }
}
exports.default = buildMakeToken;
//# sourceMappingURL=token.js.map