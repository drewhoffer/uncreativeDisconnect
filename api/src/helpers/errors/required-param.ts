/**
 * @file This file exports the requiredParam method, which is used
 * to ensure a paramter is required in a data entity.
 * @author Trent Thompson
*/



// Custom Imports
import { RequiredParameterError } from "./errors";



/**
 * Throws an error if a required parameter is missing from a data entity.
 * @function
 * @param {String} param - The name of the parameter that is required.
*/
function requiredParam (param) {
	throw new RequiredParameterError(param);
}

export default requiredParam;