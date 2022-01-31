export interface IProduct {
    name?: string,
    description?: string,
    imgURL?: string,
    origin?: string,
    state?: string,
    size?: string,
    price?: number,
    id?: number,
    isOffer?: string 
  }

  export interface IBasket {
    id: number,
    products: IProduct[]
  }

  export interface IUser {
    id: number,
    name: string, 
    email: string
  }

 export interface ICategory{
   name:string,
   id:number,
   possibleValues:string[]

 }

 export interface ICategories{
   categories:ICategory[]
 }

 