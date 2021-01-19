"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// Set up the application
const app = express_1.default();
app.use(cors_1.default({ origin: true }));
app.get("/", (req, res) => {
    res.send(200);
});
const port = 3000;
app.listen(port, () => {
    console.log("Server is running on port " + port);
});
//# sourceMappingURL=index.js.map