/**
 * @file This file exports the userTokenEndpointHandler method, which is used
 * to handle requests from the userToken controller.
 * @author Trent Thompson
*/



// Custom imports
import buildUserTokenRepo from "../../repositories/userToken/userToken-repo";
import UserToken from "../../entities/userToken/userToken-model";
import buildUserTokenEndpointHandler from "./userToken-endpoint";
import auth from "../../helpers/auth/auth";

// Build and export the admin token endpoint handler
export default buildUserTokenEndpointHandler(buildUserTokenRepo(UserToken), auth);