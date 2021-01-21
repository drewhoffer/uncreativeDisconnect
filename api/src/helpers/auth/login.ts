// Test file so trent can get a token without frontend
import db from "../firebase/firebase";
import { Request, Response } from "express";

export default async function login(req: Request, res: Response) {
	const { email, password } = req.body;
	if (!email || !password) {
		return res.status(400).send("Bad request. No POST body.");
	}

	// Try to sign in with auth provider
	try {
		const { user } = await db.auth().signInWithEmailAndPassword(email, password);
		
		// Get auth token and return
		const token = await user.getIdToken();
		return res.status(200).send({token});
	}
	catch (error) {
		console.log(error);
		return res.status(400).send("Something went wrong.")
	}
}