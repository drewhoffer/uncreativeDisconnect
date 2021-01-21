/**
 * @file This file exports the buildMakeToken function,
 * which is used to create the makeToken function with it's dependencies.
 * @author Trent Thompson
*/



// Custom imports
import { InvalidPropertyError } from "../../helpers/errors/errors";
import requiredParam from "../../helpers/errors/required-param";
import { Token } from "../../helpers/types";



/**
 * Builds the makeToken function with the injected dependencies.
 * @function
 * @param {String} isEmail - Checks if the a value is an email address
 * @param {String} tokenize - Allows us to make a token string
 * @return {Function} Returns the makeToken function.
 */
export default function buildMakeToken(isEmail, tokenize) {
	/**
    * Makes a token object.
    * @function
    * @param {Object} tokenInfo – The necessary info to create a Token object.
    * @return {Object} Returns an Object with getters for Token object fields.
    */
	return function makeToken(tokenInfo) {
		// Check the token info is there
		if (!tokenInfo) {
			requiredParam("Token Info");
		}

		// Validate and normalize the token
		const normalizedToken = normalize(validate(tokenInfo));

		return Object.freeze({
            getEmail: () => normalizedToken.email,
            getToken: () => normalizedToken.token
        });
	}

	


	/**
    * Returns a normalized Token object.
    * @function
    * @param {String} email – The email address to be turned to all lowercase.
    * @param {Object} otherInfo - The rest of the info associated with the token.
    * @return {Object} Returns a normalized token object.
    */
	function normalize({email, ...otherInfo}) {
		return {
			...otherInfo,
			email: email.toLowerCase(),
		} as Token;
	}

	

	/**
    * Validates the tokenInfo to create a Token object.
    * @function
    * @param {String} email – The email of the user we are associating with the token.
    * @param {String} token – The generated token we are storing.
    * @return {Object} Returns a validated token object.
    */
	function validate({
		email,
		token
	}) {
		// Check the email is there
		if (!email) {
			requiredParam("Email");
		}

		// Validate email is a string
		if (!(typeof email === "string" || email instanceof String)) {
			throw new InvalidPropertyError("Email must be a string.");
		}

		// Validate the email
		if (!isEmail(email)) {
            throw new InvalidPropertyError(`Email is invalid format.`);
		}
		
		// If there is no token, they we know we need to make one
		if (!token) {
			token = tokenize({email}, process.env.JWT_SECRET);
		}
		// Otherwise make sure the incoming token is valid
		else {	
			// Validate token is a string
			if (!(typeof token === "string" || token instanceof String)) {
				throw new InvalidPropertyError("Token must be a string.");
			}
		}
		
		// Return the token
		return {
			token,
			email
		}
	}
}