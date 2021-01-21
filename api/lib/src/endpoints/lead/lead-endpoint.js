"use strict";
/**
 * @file This file exports the buildLeadEndpointHandler method, which is used
 * to create a leadEndpointHandler function with it's dependencies.
 * @author Trent Thompson
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Custom imports
const lead_1 = __importDefault(require("../../entities/lead"));
const http_error_1 = __importDefault(require("../../helpers/http/http-error"));
const handleError_1 = __importDefault(require("../../helpers/errors/handleError"));
/**
 * Builds the leadEndpointHandler function with the injected dependencies.
 * @function
 * @param {Object} leadRepo – The data access repo to be used by the endpoint.
 * @return {Function} Returns the leadEndpointHandler function.
 */
function buildLeadEndpointHandler(leadRepo) {
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
        return http_error_1.default({ errorMessage: "Something went wrong.", statusCode: 500 });
    };
    /**
     * Adds a lead to the database
     * @function
     * @param {Object} httpRequest – The request to handle.
     * @return {Object} A 201 response.
     */
    async function addLead(httpRequest) {
        const { email, phone, name } = httpRequest.body;
        if (!email || !phone || !name) {
            return http_error_1.default({ errorMessage: "Bad request. No POST body.", statusCode: 400 });
        }
        // Try to add the token to the database and email the user
        try {
            const token = lead_1.default({
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
            };
        }
        // Catch and handle error accordingly
        catch (error) {
            return handleError_1.default(error);
        }
    }
}
exports.default = buildLeadEndpointHandler;
//# sourceMappingURL=lead-endpoint.js.map