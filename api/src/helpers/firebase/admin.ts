/**
 * @file This file exports the initialized firebase admin module.
 * @author Trent Thompson
*/



// Installed imports
import firebaseAdmin from "firebase-admin";

// Custom imports
import serviceAccount from "../../../secret";



// Initialize the firebase admin module
if (!firebaseAdmin.apps.length) {
	firebaseAdmin.initializeApp({
	  credential: firebaseAdmin.credential.cert({
		privateKey: serviceAccount.private_key,
		clientEmail: serviceAccount.client_email,
		projectId: serviceAccount.project_id,
	  }),
	});
}

export default firebaseAdmin;