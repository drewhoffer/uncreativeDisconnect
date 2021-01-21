"use strict";
/**
 * @file This file exports the leadEndpointHandler method, which is used
 * to handle requests from the lead controller.
 * @author Trent Thompson
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Custom imports 
const lead_repo_1 = __importDefault(require("../../repositories/lead/lead-repo"));
const lead_model_1 = __importDefault(require("../../entities/lead/lead-model"));
const lead_endpoint_1 = __importDefault(require("./lead-endpoint"));
// build and export the lead endpoint handler
exports.default = lead_endpoint_1.default(lead_repo_1.default(lead_model_1.default));
//# sourceMappingURL=index.js.map