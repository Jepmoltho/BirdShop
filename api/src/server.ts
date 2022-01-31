import express from "express";

import {categoryRouter} from "./categories/categories.route";
import {productRouter} from "./products/products.route";
import {basketRouter} from "./baskets/baskets.route";
import { userRouter } from "./user/user.route";
var cors = require('cors')


const app = express();
const PORT = 9000;
var cors = require("cors");
app.use(cors());
// This is a built-in middleware function in Express. It parses incoming requests with JSON payloads.
app.use(express.json());

// paths handled by quizzesRouter
app.use(categoryRouter)

// paths handled by basketsRouter
app.use(basketRouter)


// new addition!
// paths handled by quizzesRouter
app.use(productRouter)

app.use(userRouter)



app.get("/", (req, res) => res.send("Server 3: Hello World!"));


// For invalid routes
app.get("*", (req, res) => {
  res.send("404! This is an invalid URL.");
});

app.listen(PORT, function () {
   console.log("Server listening on Port", PORT);
});
