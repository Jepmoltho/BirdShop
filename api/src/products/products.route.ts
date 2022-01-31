






import express from 'express'
import {getAllProducts, getProduct, getByCategory} from './products.controler'

export const productRouter = express.Router();

// middleware specific to this route
productRouter.use(express.json())

// route handlers

productRouter.get("/products", getAllProducts);
productRouter.get("/products/:id", getProduct); 
productRouter.get("/products/:category/:type", getByCategory);

