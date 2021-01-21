"use strict";
/**
 * @file This file exports the buildUserTokenEndpointHandler method, which is used
 * to create a userTokenEndpointHandler function with it's dependencies.
 * @author Trent Thompson
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Custom imports
const userToken_1 = __importDefault(require("../../entities/userToken"));
const http_error_1 = __importDefault(require("../../helpers/http/http-error"));
const handleError_1 = __importDefault(require("../../helpers/errors/handleError"));
/**
 * Builds the userTokenEndpointHandler function with the injected dependencies.
 * @function
 * @param {Object} userTokenRepo – The data access repo to be used by the endpoint.
 * @param {Function} auth – Ensures user is specific permission level before allowing request.
 * @return {Function} Returns the userTokenEndpointHandler function.
 */
function buildAdminTokenEndpointHandler(userTokenRepo, auth) {
    /**
     * Handles an http request for a user token resource.
     * @function
     * @param {Object} httpRequest – The request to handle.
     * @return {Object} A response with a status code and requested data.
     */
    return async function handle(httpRequest) {
        const { method } = httpRequest;
        // Check if we are inviting a user
        if (method === "POST") {
            // Must be admin or root
            return await auth(httpRequest, ["admin", "root"], inviteUser);
        }
        return http_error_1.default({ errorMessage: "Something went wrong.", statusCode: 500 });
    };
    /**
     * Adds hser token and sends invite email.
     * @function
     * @param {Object} httpRequest – The request to handle.
     * @return {Object} A 201 response.
     */
    async function inviteUser(httpRequest) {
        const { email } = httpRequest.body;
        if (!email) {
            return http_error_1.default({ errorMessage: "Bad request. No POST body.", statusCode: 400 });
        }
        // Try to add the token to the database and email the user
        try {
            const token = userToken_1.default({
                email
            });
            // Add the token of the user
            await userTokenRepo.add(token);
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
//# sourceMappingURL=userToken-endpoint.js.map