import firebaseAdmin from "./admin";
import User from "../models/user";

export default async function auth(req, res, next) {
	try {
		// Make sure header is available
		if (req.headers?.authorization?.startsWith("Bearer ")) {
			const idToken = req.headers.authorization.split("Bearer ")[1];
			const decodedToken = await firebaseAdmin.auth().verifyIdToken(idToken);

			req["user"] = decodedToken;
		}
		else {
			return res.status(400).send("Need auth headers.");
		}
	}
	catch {
		return res.status(404).send("User not found.");
	}

	next();
}