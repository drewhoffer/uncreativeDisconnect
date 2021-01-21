/**
 * @file This file exports the adminTokenEndpointHandler method, which is used
 * to handle requests from the adminToken controller.
 * @author Trent Thompson
*/



// Custom imports
import buildAdminTokenRepo from "../../repositories/adminToken/adminToken-repo";
import AdminToken from "../../entities/adminToken/adminToken-model";
import buildAdminTokenEndpointHandler from "./adminToken-endpoint";
import auth from "../../helpers/auth/auth";

// Build and export the admin token endpoint handler
export default buildAdminTokenEndpointHandler(buildAdminTokenRepo(AdminToken), auth);