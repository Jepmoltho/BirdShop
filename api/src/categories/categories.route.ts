import express from 'express'
import {getAllCategory, getCategory} from './categories.controler'

export const categoryRouter = express.Router();

// middleware specific to this route
categoryRouter.use(express.json())


// route handlers
categoryRouter.get("/category", getAllCategory);
categoryRouter.get("/category/:id", getCategory);



