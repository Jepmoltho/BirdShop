"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const customer_route_1 = require("./customers/customer.route");
const quizzes_route_1 = require("./quizzes/quizzes.route");
const app = express_1.default();
const PORT = 3000;
// This is a built-in middleware function in Express. It parses incoming requests with JSON payloads.
app.use(express_1.default.json());
// paths handled by quizzesRouter
app.use(customer_route_1.customerRouter);
// new addition!
// paths handled by quizzesRouter
app.use(quizzes_route_1.quizzesRouter);
app.get("/", (req, res) => res.send("Server 3: Hello World!"));
// For invalid routes
app.get("*", (req, res) => {
    res.send("404! This is an invalid URL.");
});
app.listen(PORT, function () {
    console.log("Server listening on Port", PORT);
});
//# sourceMappingURL=server.js.map