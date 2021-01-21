/**
 * @file This file exports the buildLeadEndpointHandler method, which is used
 * to create a leadEndpointHandler function with it's dependencies.
 * @author Trent Thompson
*/



// Custom imports
import makeLead from "../../entities/lead";
import makeHttpError from "../../helpers/http/http-error";
import handleError from "../../helpers/errors/handleError";



/**
 * Builds the leadEndpointHandler function with the injected dependencies.
 * @function
 * @param {Object} leadRepo – The data access repo to be used by the endpoint.
 * @return {Function} Returns the leadEndpointHandler function.
 */
export default function buildLeadEndpointHandler(leadRepo) {
	/**
     * Handles an http request for a lead resource.
     * @function
     * @param {Object} httpRequest – The request to handle.
     * @return {Object} A response with a status code and requested data.
     */
	return async function handle(httpRequest) {
		const { method } = httpRequest;

		// Check if we are adding a lead
		if (method === "POST") {
			return await addLead(httpRequest);
		}

		return makeHttpError({ errorMessage: "Something went wrong.", statusCode: 500 });
	}



	/**
     * Adds a lead to the database
     * @function
     * @param {Object} httpRequest – The request to handle.
     * @return {Object} A 201 response.
     */
	async function addLead(httpRequest) {
		const { email, phone, name } = httpRequest.body; 
		if (!email || !phone || !name) {
			return makeHttpError({ errorMessage: "Bad request. No POST body.", statusCode: 400 });
		}

		// Try to add the token to the database and email the user
		try {
			const token = makeLead({
				email,
				name,
				phone
			});

			// Add the token of the user
			await leadRepo.add(token);

			// Return success message
			return {
				statusCode: 201,
				data: {
					success: "true"
				}
			}
		}
		// Catch and handle error accordingly
		catch (error) {
			return handleError(error);
		}
	}
}