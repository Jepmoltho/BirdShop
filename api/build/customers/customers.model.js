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
exports.remove = exports.update = exports.add = exports.getByID = exports.getAll = void 0;
const fs = __importStar(require("fs/promises"));
const CUSTOMERS_FILE = "./customers.json";
// return all customer from file
function getAll() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let customersTxt = yield fs.readFile(CUSTOMERS_FILE, "utf8");
            let customers = JSON.parse(customersTxt);
            return customers;
        }
        catch (err) {
            if (err.code === "ENOENT") {
                // file does not exits
                yield save([]); // create a new file with ampty array
                return []; // return empty array
            } // // cannot handle this exception, so rethrow
            else
                throw err;
        }
    });
}
exports.getAll = getAll;
// save array of customers to file
function save(customers = []) {
    return __awaiter(this, void 0, void 0, function* () {
        let customersTxt = JSON.stringify(customers);
        yield fs.writeFile(CUSTOMERS_FILE, customersTxt);
    });
}
// test function for customer ID
function findCustomer(customerArray, Id) {
    return customerArray.findIndex((currCustomer) => currCustomer.id === Id);
}
// get gustomer by ID
function getByID(customerId) {
    return __awaiter(this, void 0, void 0, function* () {
        let customerArray = yield getAll();
        let index = findCustomer(customerArray, customerId);
        if (index === -1)
            throw new Error(`Customer with ID:${customerId} doesn't exist`);
        else
            return customerArray[index];
    });
}
exports.getByID = getByID;
// create a new customer
function add(newCustomer) {
    return __awaiter(this, void 0, void 0, function* () {
        let customerArray = yield getAll();
        if (findCustomer(customerArray, newCustomer.id) !== -1)
            throw new Error(`Customer with Id:${newCustomer.id} already exists`);
        customerArray.push(newCustomer);
        yield save(customerArray);
    });
}
exports.add = add;
// update existing customer
function update(customerId, customer) {
    return __awaiter(this, void 0, void 0, function* () {
        let customerArray = yield getAll();
        let index = findCustomer(customerArray, customerId); // findIndex
        if (index === -1)
            throw new Error(`Customer with ID:${customerId} doesn't exist`);
        else {
            customerArray[index] = customer;
            yield save(customerArray);
        }
    });
}
exports.update = update;
// delete existing customer
function remove(customerId) {
    return __awaiter(this, void 0, void 0, function* () {
        let customerArray = yield getAll();
        let index = findCustomer(customerArray, customerId); // findIndex
        if (index === -1)
            throw new Error(`Customer with ID:${customerId} doesn't exist`);
        else {
            customerArray.splice(index, 1); // remove customer from array
            yield save(customerArray);
        }
    });
}
exports.remove = remove;
//# sourceMappingURL=customers.model.js.map