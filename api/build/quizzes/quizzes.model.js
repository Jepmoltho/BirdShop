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
exports.remove = exports.update = exports.add = exports.getByName = exports.getAll = void 0;
const fs = __importStar(require("fs/promises"));
const QUIZZES_FILE = "./quizzes.json";
let q1 = { id: 1, quizName: "bird", questions: [] };
// return all quizzes from file
function getAll() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let quizzesTxt = yield fs.readFile(QUIZZES_FILE, "utf8");
            let quizzes = JSON.parse(quizzesTxt);
            return quizzes;
        }
        catch (err) {
            if (err.code === "ENOENT") {
                // file does not exits
                yield save([]); // create a new file with empty array
                return []; // return empty array
            } // // cannot handle this exception, so rethrow
            else
                throw err;
        }
    });
}
exports.getAll = getAll;
// save array of quizzes to file
function save(quizzes = []) {
    return __awaiter(this, void 0, void 0, function* () {
        let quizzesTxt = JSON.stringify(quizzes);
        yield fs.writeFile(QUIZZES_FILE, quizzesTxt);
    });
}
// test function for quizName
function findQuiz(quizArray, quizId) {
    return quizArray.findIndex((currQuiz) => currQuiz.id === quizId);
}
// get quizz by name
function getByName(quizId) {
    return __awaiter(this, void 0, void 0, function* () {
        let quizArray = yield getAll();
        let index = findQuiz(quizArray, quizId);
        if (index === -1)
            throw new Error(`Quiz with id '${quizId}' doesn't exist`);
        else
            return quizArray[index];
    });
}
exports.getByName = getByName;
// create a new quiz
function add(newQuiz) {
    return __awaiter(this, void 0, void 0, function* () {
        let quizArray = yield getAll();
        if (findQuiz(quizArray, newQuiz.id) !== -1)
            throw new Error(`Quiz with id:${newQuiz.id} already exists`);
        quizArray.push(newQuiz);
        yield save(quizArray);
    });
}
exports.add = add;
// update existing quiz
function update(quizId, quiz) {
    return __awaiter(this, void 0, void 0, function* () {
        let quizArray = yield getAll();
        let index = findQuiz(quizArray, quizId); // findIndex
        if (index === -1)
            throw new Error(`Quiz with id:${quizId} doesn't exist`);
        else {
            quizArray[index] = quiz;
            yield save(quizArray);
        }
    });
}
exports.update = update;
// delete existing quiz
function remove(quizId) {
    return __awaiter(this, void 0, void 0, function* () {
        let quizArray = yield getAll();
        let index = findQuiz(quizArray, quizId); // findIndex
        if (index === -1)
            throw new Error(`Quiz with id:${quizId} doesn't exist`);
        else {
            quizArray.splice(index, 1); // remove quiz from array
            yield save(quizArray);
        }
    });
}
exports.remove = remove;
//# sourceMappingURL=quizzes.model.js.map