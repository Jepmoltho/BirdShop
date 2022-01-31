import {Model} from "../model/generics.model"
import {Request, Response} from "express"

let model = new Model("./src/user/user.json")

export async function getAllUsers(req:Request, res:Response) {
    try {
        let allUsers = await model.getAll();
        res.json(allUsers);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

export async function postUser(req:Request, res:Response) {
  try {
    let newUser= req.body;
    await model.add(newUser);
    res.end()
  } catch (error) {
    res.status(400).send(error.message);
  }
}
export async function getUser (req:Request, res:Response) {
  try {
    let id = parseInt(req.params.id)
    let user= await model.getByID(id);
    res.json(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function putUser (req:Request, res:Response) {
  try {
    let id = parseInt(req.params.id)
    let user = req.body;
    await model.update(id, user);
    res.end();
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function deleteUser (req:Request, res:Response) {
  try {
    let id = parseInt(req.params.id)
    await model.remove(id);
    res.end();
  } catch (error) {
          res.status(400).send(error.message);
  }
}
