"use strict";
/**
 * @file This file exports the buildAdminTokenRepo method, which is used
 * to create a adminTokenRepo object with it's dependencies.
 * @author Trent Thompson
*/
Object.defineProperty(exports, "__esModule", { value: true });
// Custom imports
const errors_1 = require("../../helpers/errors/errors");
/**
 * Builds the adminTokenRepo object with the injected dependencies.
 * @function
 * @param {Object} Model – The model object to use.
 * @return {Object} Returns the adminTokenRepo object.
 */
function buildAdminTokenRepo(Model) {
    return Object.freeze({
        add,
    });
    /**
     * Adds a adminToken to the mongo database.
     * @function
     * @param {Object} adminToken – The adminToken object to add to the database.
     * @return {Object} The adminToken that was added by mongoose.
     */
    async function add(adminToken) {
        const newToken = new Model({
            email: adminToken.getEmail(),
            token: adminToken.getToken()
        });
        // try to add and return new token
        try {
            return await newToken.save();
        }
        catch (error) {
            throw new errors_1.InternalError();
        }
    }
}
exports.default = buildAdminTokenRepo;
//# sourceMappingURL=adminToken-repo.js.map