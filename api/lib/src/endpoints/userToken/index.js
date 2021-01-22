"use strict";
/**
 * @file This file exports the userTokenEndpointHandler method, which is used
 * to handle requests from the userToken controller.
 * @author Trent Thompson
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Custom imports
const userToken_repo_1 = __importDefault(require("../../repositories/userToken/userToken-repo"));
const userToken_model_1 = __importDefault(require("../../entities/userToken/userToken-model"));
const userToken_endpoint_1 = __importDefault(require("./userToken-endpoint"));
const auth_1 = __importDefault(require("../../helpers/auth/auth"));
// Build and export the admin token endpoint handler
exports.default = userToken_endpoint_1.default(userToken_repo_1.default(userToken_model_1.default), auth_1.default);
//# sourceMappingURL=index.js.map