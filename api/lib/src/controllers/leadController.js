"use strict";
/**
 * @file This file exports the leadController method, which is used
 * to send requests to the lead handler and return the handler
 * responses.
 * @author Trent Thompson
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Custom imports
const lead_1 = __importDefault(require("../endpoints/lead"));
const adaptRequest_1 = __importDefault(require("../helpers/http/adaptRequest"));
/**
 * Passes requests to the lead endpoint and returns responses
 * @function
 * @param {Object} req – The incoming network request
 * @param {Function} res – The response from the endpoint
 * @return {Function} Returns the server response
 */
async function leadController(req, res) {
    const httpRequest = adaptRequest_1.default(req);
    try {
        const { statusCode, data } = await lead_1.default(httpRequest);
        return res.status(statusCode).send(data);
    }
    catch (e) {
        return res.status(500).send();
    }
}
exports.default = leadController;
//# sourceMappingURL=leadController.js.map