import React from 'react';
//import {Item, Collection} from './bird.js';



const dis = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel finibus lorem, in venenatis augue. Nam non nibh nunc. In id orci lobortis, suscipit odio a, eleifend dolor. Mauris sapien metus, faucibus maximus velit id, maximus lacinia nibh. Nunc non nisl at lectus porta posuere vel a erat. Quisque ut rutrum tortor. Cras vel lacus quam. Phasellus sagittis, dui a dapibus consectetur, nibh sem pellentesque ipsum, nec tempor libero leo tincidunt tortor. Mauris ultrices ullamcorper risus sed auctor.";

function formatProduct(prod: any){
    return prod.name + ' ' + prod.origin;
}

export const prod1 = {
    name: "Albatross", 
    description: dis, 
    imgURL: "images/albatross.png", 
    origin: "real", 
    state: "hatched", 
    size: "medium", 
    price: 450.00, 
    id: 1, 
    isOffer: "offer"
};


export const element1 = (
    <h1>Hello, {formatProduct(prod1)}</h1>
)



//**************************  TEST ABOVE *********************




//BIRDSHOP.JS
export function generateProduct(item: any){
    return `
    <div class="col-sm-6 col-md-4">
        <div class="shop__thumb">
            <a href="product.html"
            onclick="location.href=this.href+'?id='+${item.id.toString()};return false;")">
                <div class="shop-thumb__img">
                    <img src="${item.imgURL}" class="img-responsive" alt="...">
                </div>
                <h5 class="shop-thumb__title">
                    ${item.name}
                </h5>
                <div class="shop-thumb__price">
                    ${item.price} $
                </div>
                <a href="#" id="cart-btn" class="cart-btn">Add to basket</a>
            </a>
        </div>
    </div>`
}



function getProduct(prod1: any){
    return `
    <div class="col-sm-6 col-md-4">
        <div class="shop__thumb">
            <a href="product.html"
            onclick="location.href=this.href+'?id='+${prod1.id.toString()};return false;")">
                <div class="shop-thumb__img">
                    <img src="${prod1.imgURL}" class="img-responsive" alt="...">
                </div>
                <h5 class="shop-thumb__title">
                    ${prod1.name}
                </h5>
                <div class="shop-thumb__price">
                    ${prod1.price} $
                </div>
                <a href="#" id="cart-btn" class="cart-btn">Add to basket</a>
            </a>
        </div>
    </div>`
}


/*
export const allproducts = (
    <div>{generateProduct(prod1)}</div>
)
*/

/*
export const products = [
    {name: "Albatross", description: dis, imgURL: "images/albatross.png", orgin: "real", state: "hatched", size: "medium", price: 450.00, id: 1, isOffer: "offer"},
    {name: "Bald Eagle", description: dis, imgURL: "images/bald_eagle.png", orgin: "real", state: "hatched", size: "medium", price: 899.95, id: 2, isOffer: ""}
]; 
*/


/*
export function formatProduct(product: { name: string; }){
    return product.name + ' ' + products.id;
}
*/


/*
export interface product{
    name: string, 
    imgURL: string, 
    origin: string, 
    state: string, 
    size: string, 
    price: number,
    id: number, 
    isOffer: string
}
*/

/*
class productImage extends React.Component implements product{
    render(){
        const imgURL = this.pr .imgURL; .imgURL;
        return (
            <img src="albatross.png"></img>
        );
    }

}
*/




