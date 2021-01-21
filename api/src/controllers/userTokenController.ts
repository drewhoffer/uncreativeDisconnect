/**
 * @file This file exports the userTokenController method, which is used
 * to send requests to the user token handler and return the handler
 * responses.
 * @author Trent Thompson
*/



// Custom imports
import userTokenEndpointHandler from "../endpoints/userToken";
import adaptRequest from "../helpers/http/adaptRequest";



/**
 * Passes requests to the user token endpoint and returns responses
 * @function
 * @param {Object} req – The incoming network request
 * @param {Function} res – The response from the endpoint
 * @return {Function} Returns the server response
 */
export default async function userTokenController(req, res) {
	const httpRequest = adaptRequest(req);

	try {
		const {
			statusCode,
			data
		} = await userTokenEndpointHandler(httpRequest);

		return res.status(statusCode).send(data);
	} catch (e) {
		return res.status(500).send();
	}
}