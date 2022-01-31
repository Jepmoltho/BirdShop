import {Model} from "../model/generics.model"
import {Request, Response} from "express"


let model = new Model("./src/categories/categories.json")
 
  
export async function getAllCategory(req:Request, res:Response) {
      try {
          let allCategories = await model.getAll();
          res.json(allCategories);
      } catch (error) {
        res.status(400).send(error.message);
      }
    }


  export async function  getCategory (req:Request, res:Response) {
    try {
      let id = parseInt(req.params.id)
      let category = await model.getByID(id);
      res.json(category);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }


