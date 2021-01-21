"use strict";
/**
 * @file This file exports the adminTokenController method, which is used
 * to send requests to the admin token handler and return the handler
 * responses.
 * @author Trent Thompson
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Custom imports
const adminToken_1 = __importDefault(require("../endpoints/adminToken"));
const adaptRequest_1 = __importDefault(require("../helpers/http/adaptRequest"));
async function employerController(req, res) {
    const httpRequest = adaptRequest_1.default(req);
    try {
        const { statusCode, data } = await adminToken_1.default(httpRequest);
        return res.status(statusCode).send(data);
    }
    catch (e) {
        return res.status(500).send();
    }
}
exports.default = employerController;
//# sourceMappingURL=adminTokenController.js.map