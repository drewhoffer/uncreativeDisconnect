/**
 * @file This file exports the leadController method, which is used
 * to send requests to the lead handler and return the handler
 * responses.
 * @author Trent Thompson
*/



// Custom imports
import leadEndpointHandler from "../endpoints/lead";
import adaptRequest from "../helpers/http/adaptRequest";



/**
 * Passes requests to the lead endpoint and returns responses
 * @function
 * @param {Object} req – The incoming network request
 * @param {Function} res – The response from the endpoint
 * @return {Function} Returns the server response
 */
export default async function leadController(req, res) {
	const httpRequest = adaptRequest(req);

	try {
		const {
			statusCode,
			data
		} = await leadEndpointHandler(httpRequest);

		return res.status(statusCode).send(data);
	} catch (e) {
		return res.status(500).send();
	}
}