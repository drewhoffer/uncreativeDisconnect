"use strict";
/**
 * @file This file exports the buildAdminTokenEndpointHandler method, which is used
 * to create a adminTokenEndpointHandler function with it's dependencies.
 * @author Trent Thompson
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Custom imports
const adminToken_1 = __importDefault(require("../../entities/adminToken"));
const http_error_1 = __importDefault(require("../../helpers/http/http-error"));
const handleError_1 = __importDefault(require("../../helpers/errors/handleError"));
/**
 * Builds the adminTokenEndpointHandler function with the injected dependencies.
 * @function
 * @param {Object} adminTokenRepo – The data access repo to be used by the endpoint.
 * @param {Function} auth – Ensures user is specific permission level before allowing request.
 * @return {Function} Returns the adminTokenEndpointHandler function.
 */
function buildAdminTokenEndpointHandler(adminTokenRepo, auth) {
    /**
     * Handles an http request for a admin token resource.
     * @function
     * @param {Object} httpRequest – The request to handle.
     * @return {Object} A response with a status code and requested data.
     */
    return async function handle(httpRequest) {
        const { method } = httpRequest;
        // Check if we are inviting an admin
        if (method === "POST") {
            return await auth(httpRequest, "root", inviteAdmin);
        }
        return http_error_1.default({ errorMessage: "Something went wrong.", statusCode: 500 });
    };
    /**
     * Adds admin token and sends invite email.
     * @function
     * @param {Object} httpRequest – The request to handle.
     * @return {Object} A 201 response.
     */
    async function inviteAdmin(httpRequest) {
        const { email } = httpRequest.body;
        if (!email) {
            return http_error_1.default({ errorMessage: "Bad request. No POST body.", statusCode: 400 });
        }
        // Try to add the token to the database and email the user
        try {
            const token = adminToken_1.default({
                email
            });
            // Add the token of the user
            await adminTokenRepo.add(token);
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
exports.default = buildAdminTokenEndpointHandler;
//# sourceMappingURL=adminToken-endpoint.js.map