/**
 * @file This file exports the leadController method, which is used
 * to send requests to the lead handler and return the handler
 * responses.
 * @author Trent Thompson
*/



// Custom imports
import leadEndpointHandler from "../endpoints/lead";
import adaptRequest from "../helpers/http/adaptRequest";

export default async function employerController(req, res) {
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