import {Model} from "../model/generics.model"
import {Request, Response} from "express"

let model = new Model("./src/baskets/baskets.json")

export async function getAllBaskets(req:Request, res:Response) {
    try {
        let allBaskets = await model.getAll();
        res.json(allBaskets);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

export async function postBasket(req:Request, res:Response) {
  try {
    let newBasket= req.body;
    await model.add(newBasket);
    res.end()
  } catch (error) {
    res.status(400).send(error.message);
  }
}
export async function getBasket (req:Request, res:Response) {
  try {
    let id = parseInt(req.params.id)
    let basket = await model.getByID(id);
    res.json(basket);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function putBasket (req:Request, res:Response) {
  try {
    let id = parseInt(req.params.id)
    let basket = req.body;
    await model.update(id, basket);
    res.end();
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function deleteBasket (req:Request, res:Response) {
  try {
    let id = parseInt(req.params.id)
    await model.remove(id);
    res.end();
  } catch (error) {
          res.status(400).send(error.message);
  }
}
