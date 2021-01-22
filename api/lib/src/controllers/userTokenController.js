"use strict";
/**
 * @file This file exports the userTokenController method, which is used
 * to send requests to the user token handler and return the handler
 * responses.
 * @author Trent Thompson
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Custom imports
const userToken_1 = __importDefault(require("../endpoints/userToken"));
const adaptRequest_1 = __importDefault(require("../helpers/http/adaptRequest"));
/**
 * Passes requests to the user token endpoint and returns responses
 * @function
 * @param {Object} req – The incoming network request
 * @param {Function} res – The response from the endpoint
 * @return {Function} Returns the server response
 */
async function userTokenController(req, res) {
    const httpRequest = adaptRequest_1.default(req);
    try {
        const { statusCode, data } = await userToken_1.default(httpRequest);
        return res.status(statusCode).send(data);
    }
    catch (e) {
        return res.status(500).send();
    }
}
exports.default = userTokenController;
//# sourceMappingURL=userTokenController.js.map