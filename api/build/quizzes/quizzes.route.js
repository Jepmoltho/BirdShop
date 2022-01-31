"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.quizzesRouter = void 0;
// index.js
const express_1 = __importDefault(require("express"));
const quizzes_controler_1 = require("./quizzes.controler");
exports.quizzesRouter = express_1.default.Router();
// middleware specific to this route
exports.quizzesRouter.use(express_1.default.json());
// Create a new quiz 
exports.quizzesRouter.post("/quizzes", quizzes_controler_1.postQuiz);
//Retrieve the quiz named as quizName
exports.quizzesRouter.get("/quizzes/:id", quizzes_controler_1.getQuiz);
//# sourceMappingURL=quizzes.route.js.map