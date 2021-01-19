import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";

import Form from "./models/form";


// Set up the application
const app = express();
app.use(cors({ origin: true }));
app.use(express.json());
const port = process.env.PORT || 3000;



// Routes
app.post("/form", async (req: Request, res: Response) => {
	// Pull out data from body
	const { name, email, phone } = req.body;
	if (!name || !email || !phone) {
		return res.status(400).send("Bad request. No POST body");
	}

	try {
		// Create the form entry
		const form = new Form({
			name,
			email,
			phone
		});
		const response = await (await form.save()).toObject();
		return res.status(201).send(response);
	}
	catch {
		return res.status(400).send("Invalid entry");
	}
});



app.get("/form", async (req: Request, res: Response) => {
	try {
		const response = await Form.find();
		return res.status(200).send(response);
	}
	catch {
		return res.status(200).send("Something went wrong");
	}
});



console.log("Connecting to database...");
// Connect to mongoose
mongoose.connect(process.env.DATABASE_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
}, (error) => {
	if (error) {
		console.log("Unable to establish database connection.");
		return;
	}
	// Start the application
	app.listen(port, () => console.log(`Listening on port ${port}`));
});