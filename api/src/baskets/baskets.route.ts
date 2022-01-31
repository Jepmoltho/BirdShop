import express from 'express'
import {getAllBaskets, postBasket, getBasket,putBasket, deleteBasket } from './baskets.controler'

export const basketRouter = express.Router();

// middleware specific to this route
basketRouter.use(express.json())


// route handlers
basketRouter.get("/baskets", getAllBaskets);

basketRouter.post("/baskets/:id", postBasket);

basketRouter.get("/baskets/:id", getBasket);

basketRouter.put("/baskets/:id",putBasket);

basketRouter.delete("/baskets/:id", deleteBasket);

