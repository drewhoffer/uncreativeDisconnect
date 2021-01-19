import express, { Request, Response } from "express";
import cors from "cors";

// Set up the application
const app = express();
app.use(cors({ origin: true }));

app.get("/", (req: Request, res: Response) => {
	res.send(200);
});

const port = 3000;
app.listen(port, () => {
	console.log("Server is running on port " + port);
})