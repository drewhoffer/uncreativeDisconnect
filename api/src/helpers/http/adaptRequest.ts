/**
 * @file This file exports the adaptRequest method, which is used
 * to adapt an http request into a nicely formatted object.
 * @author Trent Thompson
*/



/**
 * Turns an http request into a nicely formatted object.
 * @function
 * @param {Object} req – The http request.
 * @return {Object} Returns the adapted object.
 */
export default function adaptRequest(req) {
	return Object.freeze({
		path: req.path,
		method: req.method,
		pathParams: req.params,
		queryParams: req.query,
		body: req.body,
		headers: req.headers,
		file: req.file
	});
}