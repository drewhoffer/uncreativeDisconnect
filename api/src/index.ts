/**
 * @file This file is the main access point to the application.
 * It sets up the connection to the database, and listens on a port
 * for network requests.
 * @author Trent Thompson
*/



// Installed imports
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

// Custom imports
import adminTokenController from "./controllers/adminTokenController";
import leadController from "./controllers/leadController";

// Test imports
import login from "./helpers/auth/login";



// Set up the application
const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// Configure the port
const port = process.env.PORT || 3000;



// Routes
// Admins
app.post("/admin/invite", adminTokenController);

// Leads
app.post("/lead", leadController);

// Test route
app.post("/login", login);



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