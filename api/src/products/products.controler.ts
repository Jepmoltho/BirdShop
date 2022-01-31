import {Model} from "../model/generics.model"
import {Request, Response} from "express"



let model = new Model("./src/products/products.json")

export async function getAllProducts(req:Request, res:Response){
    try{
        let allProducts = await model.getAll();
        res.json(allProducts);
    } catch (error){
        res.status(400).send(error.message);
    }
}

export async function getProduct(req:Request, res:Response) {
    try{
        let id = parseInt(req.params.id)
        let product = await model.getByID(id); 
        res.json(product);
    } catch (error){
        res.status(400).send(error.message);
    }

}

export async function getByCategory(req:Request, res:Response) {
    try{
        let category = req.params.category
        let type = req.params.type
        let catProducts = await model.getByCategory(category, type);
        res.json(catProducts)
    } catch (error){
        res.status(400).send(error.message);
    }
}



//putProduct function omitted 

//deleteProduct function omitted
