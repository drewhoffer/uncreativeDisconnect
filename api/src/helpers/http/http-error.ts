/**
 * @file This file exports the makeHttpError method, which is used
 * to create and return a formatted httpError.
 * @author Trent Thompson
*/



/**
 * Formats an httpError to send from an endpoint.
 * @function
 * @param {Number} statusCode – The status code for the error to return.
 * @param {String} errorMessage - The error string to return.
 * @return {Object} Returns an httpError object.
 */
export default function makeHttpError({ statusCode, errorMessage }) {
	return {
		statusCode,
		data: {
			error: errorMessage
		}
	};
}