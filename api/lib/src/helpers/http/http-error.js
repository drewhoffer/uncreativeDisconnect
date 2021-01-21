"use strict";
/**
 * @file This file exports the makeHttpError method, which is used
 * to create and return a formatted httpError.
 * @author Trent Thompson
*/
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Formats an httpError to send from an endpoint.
 * @function
 * @param {Number} statusCode – The status code for the error to return.
 * @param {String} errorMessage - The error string to return.
 * @return {Object} Returns an httpError object.
 */
function makeHttpError({ statusCode, errorMessage }) {
    return {
        statusCode,
        data: {
            error: errorMessage
        }
    };
}
exports.default = makeHttpError;
//# sourceMappingURL=http-error.js.map