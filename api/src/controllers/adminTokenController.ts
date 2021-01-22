/**
 * @file This file exports the adminTokenController method, which is used
 * to send requests to the admin token handler and return the handler
 * responses.
 * @author Trent Thompson
*/



// Custom imports
import adminTokenEndpointHandler from "../endpoints/adminToken";
import adaptRequest from "../helpers/http/adaptRequest";



/**
 * Passes requests to the admin token endpoint and returns responses
 * @function
 * @param {Object} req – The incoming network request
 * @param {Function} res – The response from the endpoint
 * @return {Function} Returns the server response
 */
export default async function adminTokenController(req, res) {
	const httpRequest = adaptRequest(req);

	try {
		const {
			statusCode,
			data
		} = await adminTokenEndpointHandler(httpRequest);

		return res.status(statusCode).send(data);
	} catch (e) {
		return res.status(500).send();
	}
}