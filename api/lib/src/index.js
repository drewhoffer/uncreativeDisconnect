"use strict";
/**
 * @file This file is the main access point to the application.
 * It sets up the connection to the database, and listens on a port
 * for network requests.
 * @author Trent Thompson
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Installed imports
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
// Custom imports
const adminTokenController_1 = __importDefault(require("./controllers/adminTokenController"));
const userTokenController_1 = __importDefault(require("./controllers/userTokenController"));
const leadController_1 = __importDefault(require("./controllers/leadController"));
// Test imports
const login_1 = __importDefault(require("./helpers/auth/login"));
// Set up the application
const app = express_1.default();
app.use(cors_1.default({ origin: true }));
app.use(express_1.default.json());
// Configure the port
const port = process.env.PORT || 3000;
// Routes
// Admins
app.post("/admin/invite", adminTokenController_1.default);
// Users
app.post("/user/invite", userTokenController_1.default);
// Leads
app.post("/lead", leadController_1.default);
// Test route
app.post("/login", login_1.default);
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