"use strict";
/**
 * @file This file exports the adminTokenEndpointHandler method, which is used
 * to handle requests from the adminToken controller.
 * @author Trent Thompson
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Custom imports
const adminToken_repo_1 = __importDefault(require("../../repositories/adminToken/adminToken-repo"));
const adminToken_model_1 = __importDefault(require("../../entities/adminToken/adminToken-model"));
const adminToken_endpoint_1 = __importDefault(require("./adminToken-endpoint"));
const auth_1 = __importDefault(require("../../helpers/auth/auth"));
// Build and export the admin token endpoint handler
exports.default = adminToken_endpoint_1.default(adminToken_repo_1.default(adminToken_model_1.default), auth_1.default);
//# sourceMappingURL=index.js.map