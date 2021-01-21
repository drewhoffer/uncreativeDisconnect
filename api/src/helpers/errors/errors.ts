/**
 * @file This file exports the custom Error classes that are used
 * within the system.
 * @author Trent Thompson
*/



/**
 * Thrown when a parameter is the wrong type of object,
 * or in an invalid format.
 * @class
 */
export class InvalidPropertyError extends Error {
	constructor (msg) {
		super(msg);

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, InvalidPropertyError);
		}
	}
}



/**
 * Thrown when a parameter is required, but missing from a constructor.
 * @class
 */
export class RequiredParameterError extends Error {
	constructor (param) {
		super(`${param} can not be null or undefined.`);

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, RequiredParameterError);
		}
	}
}



/**
 * Thrown when something goes wrong with a mongoose call.
 * @class
 */
export class InternalError extends Error {
	constructor () {
		super("Something went wrong.");

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, InternalError);
		}
	}
}