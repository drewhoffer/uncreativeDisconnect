/**
 * @file This file exports the buildLeadRepo method, which is used
 * to create a leadRepo object with it's dependencies.
 * @author Trent Thompson
*/



// Custom imports
import { InternalError } from "../../helpers/errors/errors";



/**
 * Builds the leadRepo object with the injected dependencies.
 * @function
 * @param {Object} Model – The model object to use.
 * @return {Object} Returns the leadRepo object.
 */
export default function buildLeadRepo(Model) {
	return Object.freeze({
		add,
	});



	/**
     * Adds a lead to the mongo database.
     * @function
     * @param {Object} lead – The lead object to add to the database.
     * @return {Object} The lead that was added by mongoose.
     */
	async function add(lead) {
		const newLead = new Model({
			email: lead.getEmail(),
			phone: lead.getPhone(),
			name: lead.getName()
		});

		// try to add and return new lead
		try {
			return await newLead.save();
		}
		catch (error) {
			throw new InternalError();
		}
	}
}