"use strict";
/**
 * @file This file exports the requiredParam method, which is used
 * to ensure a paramter is required in a data entity.
 * @author Trent Thompson
*/
Object.defineProperty(exports, "__esModule", { value: true });
// Custom Imports
const errors_1 = require("./errors");
/**
 * Throws an error if a required parameter is missing from a data entity.
 * @function
 * @param {String} param - The name of the parameter that is required.
*/
function requiredParam(param) {
    throw new errors_1.RequiredParameterError(param);
}
exports.default = requiredParam;
//# sourceMappingURL=required-param.js.map