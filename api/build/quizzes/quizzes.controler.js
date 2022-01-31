"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuiz = exports.postQuiz = void 0;
const quizModel = __importStar(require("./quizzes.model"));
function postQuiz(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let newQuiz = req.body;
            yield quizModel.add(newQuiz);
            res.end();
        }
        catch (error) {
            // res.statusMessage=
            res.status(400).send(error.message);
        }
    });
}
exports.postQuiz = postQuiz;
function getQuiz(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let id = parseInt(req.params.id);
            let quiz = yield quizModel.getByName(id);
            res.json(quiz);
        }
        catch (error) {
            // res.statusMessage=
            res.status(400).send(error.message);
        }
    });
}
exports.getQuiz = getQuiz;
//# sourceMappingURL=quizzes.controler.js.map