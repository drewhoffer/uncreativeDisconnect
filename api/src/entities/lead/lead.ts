/**
 * @file This file exports the buildMakeLead function,
 * which is used to create the makeLead function with it's dependencies.
 * @author Trent Thompson
*/



// Custom imports
import { InvalidPropertyError } from "../../helpers/errors/errors";
import requiredParam from "../../helpers/errors/required-param";
import { Lead } from "../../helpers/types";



/**
 * Builds the makeLead function with the injected dependencies.
 * @function
 * @param {String} isEmail - Checks if the a value is an email address
 * @return {Function} Returns the makeLead function.
 */
export default function buildMakeLead(isEmail) {
	/**
    * Makes a lead object.
    * @function
    * @param {Object} leadInfo – The necessary info to create a Lead object.
    * @return {Object} Returns an Object with getters for Lead object fields.
    */
	return function makeLead(leadInfo) {
		// Check the lead info is there
		if (!leadInfo) {
			requiredParam("Lead Info");
		}

		// Validate and normalize the token
		const normalizedLead = normalize(validate(leadInfo));

		return Object.freeze({
			getEmail: () => normalizedLead.email,
			getPhone: () => normalizedLead.phone,
			getName: () => normalizedLead.name 
		});
	}

	

	/**
    * Returns a normalized Lead object.
    * @function
    * @param {String} email – The email address to be turned to all lowercase.
    * @param {Object} otherInfo - The rest of the info associated with the lead.
    * @return {Object} Returns a normalized lead object.
    */
	function normalize({email, ...otherInfo}) {
		return {
			...otherInfo,
			email: email.toLowerCase(),
		} as Lead;
	}



	/**
    * Validates the leadInfo to create a lead object.
    * @function
    * @param {String} email – The email of the lead.
    * @param {String} phone – The phone number of the lead.
    * @param {String} name – The name of the lead.
    * @return {Object} Returns a validated lead object.
    */
	function validate({
		email,
		name,
		phone
	}) {
		// Check the email is there
		if (!email) {
			requiredParam("Email");
		}
		// Check the phone is there
		if (!phone) {
			requiredParam("Phone");
		}
		// Check the name is there
		if (!name) {
			requiredParam("Name");
		}

		// Validate email is a string
		if (!(typeof email === "string" || email instanceof String)) {
			throw new InvalidPropertyError("Email must be a string.");
		}
		// Validate name is a string
		if (!(typeof name === "string" || name instanceof String)) {
			throw new InvalidPropertyError("Name must be a string.");
		}
		// Validate phone is a string
		if (!(typeof phone === "string" || phone instanceof String)) {
			throw new InvalidPropertyError("Phone must be a string.");
		}

		// Validate the email
		if (!isEmail(email)) {
            throw new InvalidPropertyError(`Email is invalid format.`);
		}

		return {
			email,
			name,
			phone
		}
	}
}