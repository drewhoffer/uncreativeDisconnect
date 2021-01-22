"use strict";
/**
 * @file This file exports the buildUserTokenRepo method, which is used
 * to create a userTokenRepo object with it's dependencies.
 * @author Trent Thompson
*/
Object.defineProperty(exports, "__esModule", { value: true });
// Custom imports
const errors_1 = require("../../helpers/errors/errors");
/**
 * Builds the userTokenRepo object with the injected dependencies.
 * @function
 * @param {Object} Model – The model object to use.
 * @return {Object} Returns the iserTokenRepo object.
 */
function buildUserTokenRepo(Model) {
    return Object.freeze({
        add,
    });
    /**
     * Adds a userToken to the mongo database.
     * @function
     * @param {Object} userToken – The userToken object to add to the database.
     * @return {Object} The userToken that was added by mongoose.
     */
    async function add(userToken) {
        const newToken = new Model({
            email: userToken.getEmail(),
            token: userToken.getToken()
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
exports.default = buildUserTokenRepo;
//# sourceMappingURL=userToken-repo.js.map