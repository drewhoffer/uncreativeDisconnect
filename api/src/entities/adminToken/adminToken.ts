/**
 * @file This file exports the buildMakeAdminToken function,
 * which is used to create the makeAdminToken function with it's dependencies.
 * @author Trent Thompson
*/



// Custom imports
import requiredParam from "../../helpers/errors/required-param";
import makeToken from "../token";



/**
 * Builds the makeAdminToken function with the injected dependencies.
 * @function
 * @return {Function} Returns the makeAdminToken function.
 */
export default function buildMakeAdminToken() {
	/**
    * Makes an adminToken object.
    * @function
    * @param {Object} adminTokenInfo – The necessary info to create an Admin Token object.
    * @return {Object} Returns an Object with getters for Admin Token object fields.
    */
	return function makeAdminToken(adminTokenInfo) {
		// Make sure we have the required info
		if (!adminTokenInfo) {
			requiredParam("Admin Token Info");
		}

		// Make a regular token
		const baseToken = makeToken(adminTokenInfo);

		// Return getter of the adminToken
		return Object.freeze({
			...baseToken
		})
	}
}