import axios from 'axios';
import React, {useContext} from 'react';
import {get} from '../fetchers/fetchers';
import {IBasket, IProduct} from '../types/types';
import UserContext from '../UserContext';

export interface BasketItemProps{
    product:IProduct
}

const getBasket = async (id:number) => {
    var path = 'http://localhost:9000/baskets/' + id
    const response = get<IBasket>(path)
    return response;
}
const updateBasket = async (id:number, products:IProduct[]) => {
    
    await axios.put('http://localhost:9000/baskets/' + id, {
        id: id,
        products: products
    })
}


export class BasketItem extends React.Component<BasketItemProps>{

    static contextType = UserContext;

    constructor(props: BasketItemProps | Readonly<BasketItemProps>){
        super(props);
    }

    handleClick = async () => {
        var currentBasket = await getBasket(this.context.id)
        var currentProducts = currentBasket.products

        var removeIndex = currentProducts.map(currentItem => currentItem.id).indexOf(this.props.product.id);
        currentProducts.splice(removeIndex, 1); //removeIndex gets the specified position of the item to be removed (see above method). The 1 specifies how many product to remove at a time.

        
        updateBasket(this.context.id, currentProducts);
        window.location = window.location
    }


    render(){
        return (
            <div>
                <img src={this.props.product.imgURL}></img>
                <p>{this.props.product.name} -  {this.props.product.price} DKK</p>
                {/* <p>{this.props.product.description}</p> */}
                <button type='button' onClick={() => this.handleClick()} >Remove From Card</button> 
            </div>
        );
    } 
}
