/**
 * @file This file exports the leadEndpointHandler method, which is used
 * to handle requests from the lead controller.
 * @author Trent Thompson
*/



// Custom imports 
import buildLeadRepo from "../../repositories/lead/lead-repo";
import Lead from "../../entities/lead/lead-model";
import buildLeadEndpointHandler from "./lead-endpoint";

// build and export the lead endpoint handler
export default buildLeadEndpointHandler(buildLeadRepo(Lead));
