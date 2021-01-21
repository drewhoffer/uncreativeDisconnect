/**
 * @file This file exports the buildMakeUserToken function,
 * which is used to create the makeUserToken function with it's dependencies.
 * @author Trent Thompson
*/



// Custom imports
import requiredParam from "../../helpers/errors/required-param";
import makeToken from "../token";



/**
 * Builds the makeUserToken function with the injected dependencies.
 * @function
 * @return {Function} Returns the makeAUserToken function.
 */
export default function buildMakeUserToken() {
	/**
    * Makes a userToken object.
    * @function
    * @param {Object} userTokenInfo – The necessary info to create a User Token object.
    * @return {Object} Returns an Object with getters for User Token object fields.
    */
	return function makeUserToken(userTokenInfo) {
		// Make sure we have the required info
		if (!userTokenInfo) {
			requiredParam("User Token Info");
		}

		// Make a regular token
		const baseToken = makeToken(userTokenInfo);

		// Return getter of the adminToken
		return Object.freeze({
			...baseToken
		})
	}
}