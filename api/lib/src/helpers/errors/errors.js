"use strict";
/**
 * @file This file exports the custom Error classes that are used
 * within the system.
 * @author Trent Thompson
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalError = exports.RequiredParameterError = exports.InvalidPropertyError = void 0;
/**
 * Thrown when a parameter is the wrong type of object,
 * or in an invalid format.
 * @class
 */
class InvalidPropertyError extends Error {
    constructor(msg) {
        super(msg);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, InvalidPropertyError);
        }
    }
}
exports.InvalidPropertyError = InvalidPropertyError;
/**
 * Thrown when a parameter is required, but missing from a constructor.
 * @class
 */
class RequiredParameterError extends Error {
    constructor(param) {
        super(`${param} can not be null or undefined.`);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, RequiredParameterError);
        }
    }
}
exports.RequiredParameterError = RequiredParameterError;
/**
 * Thrown when something goes wrong with a mongoose call.
 * @class
 */
class InternalError extends Error {
    constructor() {
        super("Something went wrong.");
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, InternalError);
        }
    }
}
exports.InternalError = InternalError;
//# sourceMappingURL=errors.js.map