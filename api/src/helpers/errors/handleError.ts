/**
 * @file This file exports the handleError function for handling
 * the different kinds of errors within an endpoint.
 * @author Trent Thompson
*/



// Custom imports
import makeHttpError from "../http/http-error";
import { InvalidPropertyError, RequiredParameterError, InternalError } from "./errors";



/**
 * Returns an httpError with the appropriate statusCode and errorMessage
 * @function
 * @param {Object} error – The error to be handled.
 * @return {Object} Returns an httpError object.
 */
export default function handleError(error) {
	// Default error message so no unwanted messages slip out
	let statusCode = 500;
	let errorMessage = "Something has gone wrong.";

	if (error instanceof RequiredParameterError || error instanceof InvalidPropertyError) {
		statusCode = 400;
		errorMessage = error.message;
	}
	else if (error instanceof InternalError) {
		statusCode = 500;
		errorMessage = error.message;
	}

	// Return an httpError
	return makeHttpError({errorMessage, statusCode});
}