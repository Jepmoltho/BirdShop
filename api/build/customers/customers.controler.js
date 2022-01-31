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
exports.deleteCustomer = exports.putCustomer = exports.getCustomer = exports.postCustomer = exports.getAllCustomers = void 0;
const customerModel = __importStar(require("./customers.model"));
function getAllCustomers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let allCustomers = yield customerModel.getAll();
            res.json(allCustomers);
        }
        catch (error) {
            // res.statusMessage=
            res.status(400).send(error.message);
        }
    });
}
exports.getAllCustomers = getAllCustomers;
function postCustomer(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let newCustomer = req.body;
            yield customerModel.add(newCustomer);
            res.end();
        }
        catch (error) {
            // res.statusMessage=
            res.status(400).send(error.message);
        }
    });
}
exports.postCustomer = postCustomer;
function getCustomer(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let id = parseInt(req.params.id);
            let customer = yield customerModel.getByID(id);
            res.json(customer);
        }
        catch (error) {
            // res.statusMessage=
            res.status(400).send(error.message);
        }
    });
}
exports.getCustomer = getCustomer;
function putCustomer(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let id = parseInt(req.params.id);
            let customer = req.body;
            yield customerModel.update(id, customer);
            res.end();
        }
        catch (error) {
            // res.statusMessage=
            res.status(400).send(error.message);
        }
    });
}
exports.putCustomer = putCustomer;
function deleteCustomer(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let id = parseInt(req.params.id);
            yield customerModel.remove(id);
            res.end();
        }
        catch (error) {
            res.status(400).send(error.message);
        }
    });
}
exports.deleteCustomer = deleteCustomer;
//# sourceMappingURL=customers.controler.js.map