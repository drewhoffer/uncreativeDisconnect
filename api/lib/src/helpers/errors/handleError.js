"use strict";
/**
 * @file This file exports the handleError function for handling
 * the different kinds of errors within an endpoint.
 * @author Trent Thompson
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Custom imports
const http_error_1 = __importDefault(require("../http/http-error"));
const errors_1 = require("./errors");
/**
 * Returns an httpError with the appropriate statusCode and errorMessage
 * @function
 * @param {Object} error – The error to be handled.
 * @return {Object} Returns an httpError object.
 */
function handleError(error) {
    // Default error message so no unwanted messages slip out
    let statusCode = 500;
    let errorMessage = "Something has gone wrong.";
    if (error instanceof errors_1.RequiredParameterError || error instanceof errors_1.InvalidPropertyError) {
        statusCode = 400;
        errorMessage = error.message;
    }
    else if (error instanceof errors_1.InternalError) {
        statusCode = 500;
        errorMessage = error.message;
    }
    // Return an httpError
    return http_error_1.default({ errorMessage, statusCode });
}
exports.default = handleError;
//# sourceMappingURL=handleError.js.map