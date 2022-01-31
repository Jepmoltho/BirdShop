"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerRouter = void 0;
const express_1 = __importDefault(require("express"));
const customers_controler_1 = require("./customers.controler");
exports.customerRouter = express_1.default.Router();
// middleware specific to this route
exports.customerRouter.use(express_1.default.json());
// route handlers
exports.customerRouter.get("/customers", customers_controler_1.getAllCustomers);
exports.customerRouter.post("/customers", customers_controler_1.postCustomer);
exports.customerRouter.get("/customers/:id", customers_controler_1.getCustomer);
exports.customerRouter.put("/customers/:id", customers_controler_1.putCustomer);
exports.customerRouter.delete("/customers/:id", customers_controler_1.deleteCustomer);
//# sourceMappingURL=customer.route.js.map