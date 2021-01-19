"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const form_1 = __importDefault(require("./models/form"));
// Set up the application
const app = express_1.default();
app.use(cors_1.default({ origin: true }));
app.use(express_1.default.json());
const port = process.env.PORT || 3000;
// Routes
app.post("/form", async (req, res) => {
    // Pull out data from body
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        return res.status(400).send("Bad request. No POST body");
    }
    try {
        // Create the form entry
        const form = new form_1.default({
            name,
            email,
            phone
        });
        const response = await (await form.save()).toObject();
        return res.status(201).send(response);
    }
    catch (_a) {
        return res.status(400).send("Invalid entry");
    }
});
app.get("/form", async (req, res) => {
    try {
        const response = await form_1.default.find();
        return res.status(200).send(response);
    }
    catch (_a) {
        return res.status(200).send("Something went wrong");
    }
});
console.log("Connecting to database...");
// Connect to mongoose
mongoose_1.default.connect(process.env.DATABASE_URI, {
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
//# sourceMappingURL=index.js.map