/**
 * @file This file exports the auth method, which is used
 * to protect any routes that require specified access
 * @author Trent Thompson
*/



// Custom imports
import firebaseAdmin from "../firebase/admin";
import makeHttpError from "../http/http-error";
import firebase from "../firebase/firebase";



/**
 * Makes sure user is root before allowing access.
 * @function
 * @param {Object} httpRequest - The http request
 * @param {String} requiredPermission - The required level of permission
 * @param {Function} next - call if auth is valid
 * @return {Object} Returns an error or moves to endpoint
 */
export default async function auth(httpRequest, requiredPermission, next) {
	try {
		// Pull out headers
		const { headers } = httpRequest;

		// Make sure auth header starts with Bearer
		if (headers?.authorization?.startsWith("Bearer ")) {
			// Get the id token
			const idToken = headers.authorization.replace("Bearer ", "");

			// Decode the token
			const decodedToken = await firebaseAdmin.auth().verifyIdToken(idToken);

			// Find the user
			const user = await firebase.firestore().collection("users").doc(decodedToken.uid).get();

			// Check if the user has required permissions
			if (user.data()?.permission != requiredPermission) {
				return makeHttpError({statusCode: 401, errorMessage: "Unauthorized."});
			}			

			// Call the next function and return
			return await next(httpRequest, user.data());
		}
		else {
			return makeHttpError({statusCode: 401, errorMessage: "Authorization header missing."});
		}
	}
	catch (error) {
		return makeHttpError({statusCode: 404, errorMessage: "User not found."});
	}
}