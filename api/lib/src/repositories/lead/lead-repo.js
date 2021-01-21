"use strict";
/**
 * @file This file exports the buildLeadRepo method, which is used
 * to create a leadRepo object with it's dependencies.
 * @author Trent Thompson
*/
Object.defineProperty(exports, "__esModule", { value: true });
// Custom imports
const errors_1 = require("../../helpers/errors/errors");
/**
 * Builds the leadRepo object with the injected dependencies.
 * @function
 * @param {Object} Model – The model object to use.
 * @return {Object} Returns the leadRepo object.
 */
function buildLeadRepo(Model) {
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
            throw new errors_1.InternalError();
        }
    }
}
exports.default = buildLeadRepo;
//# sourceMappingURL=lead-repo.js.map