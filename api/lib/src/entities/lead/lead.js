"use strict";
/**
 * @file This file exports the buildMakeLead function,
 * which is used to create the makeLead function with it's dependencies.
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
 * Builds the makeLead function with the injected dependencies.
 * @function
 * @param {String} isEmail - Checks if the a value is an email address
 * @return {Function} Returns the makeLead function.
 */
function buildMakeLead(isEmail) {
    /**
    * Makes a lead object.
    * @function
    * @param {Object} leadInfo – The necessary info to create a Lead object.
    * @return {Object} Returns an Object with getters for Lead object fields.
    */
    return function makeLead(leadInfo) {
        // Check the lead info is there
        if (!leadInfo) {
            required_param_1.default("Lead Info");
        }
        // Validate and normalize the token
        const normalizedLead = normalize(validate(leadInfo));
        return Object.freeze({
            getEmail: () => normalizedLead.email,
            getPhone: () => normalizedLead.phone,
            getName: () => normalizedLead.name
        });
    };
    /**
    * Returns a normalized Lead object.
    * @function
    * @param {String} email – The email address to be turned to all lowercase.
    * @param {Object} otherInfo - The rest of the info associated with the lead.
    * @return {Object} Returns a normalized lead object.
    */
    function normalize(_a) {
        var { email } = _a, otherInfo = __rest(_a, ["email"]);
        return Object.assign(Object.assign({}, otherInfo), { email: email.toLowerCase() });
    }
    /**
    * Validates the leadInfo to create a lead object.
    * @function
    * @param {String} email – The email of the lead.
    * @param {String} phone – The phone number of the lead.
    * @param {String} name – The name of the lead.
    * @return {Object} Returns a validated lead object.
    */
    function validate({ email, name, phone }) {
        // Check the email is there
        if (!email) {
            required_param_1.default("Email");
        }
        // Check the phone is there
        if (!phone) {
            required_param_1.default("Phone");
        }
        // Check the name is there
        if (!name) {
            required_param_1.default("Name");
        }
        // Validate email is a string
        if (!(typeof email === "string" || email instanceof String)) {
            throw new errors_1.InvalidPropertyError("Email must be a string.");
        }
        // Validate name is a string
        if (!(typeof name === "string" || name instanceof String)) {
            throw new errors_1.InvalidPropertyError("Name must be a string.");
        }
        // Validate phone is a string
        if (!(typeof phone === "string" || phone instanceof String)) {
            throw new errors_1.InvalidPropertyError("Phone must be a string.");
        }
        // Validate the email
        if (!isEmail(email)) {
            throw new errors_1.InvalidPropertyError(`Email is invalid format.`);
        }
        return {
            email,
            name,
            phone
        };
    }
}
exports.default = buildMakeLead;
//# sourceMappingURL=lead.js.map