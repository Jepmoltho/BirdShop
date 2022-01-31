import axios from "axios";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { get } from "../fetchers/fetchers";
import { IBasket, IProduct } from "../types/types";
import UserContext from "../UserContext";

export interface ProductProps {
  //Reusability
  product: IProduct;
}

const getBasket = async (id: number) => {
  var path = "http://localhost:9000/baskets/" + id;
  const response = get<IBasket>(path);
  return response;
};
const updateBasket = async (id: number, products: IProduct[]) => {
  await axios.put("http://localhost:9000/baskets/" + id, {
    id: id,
    products: products,
  });
};

export class Product extends React.Component<ProductProps> {
  static contextType = UserContext;

  constructor(props: ProductProps | Readonly<ProductProps>) {
    super(props);
  }

  handleClick = async () => {
    //Instead of adding something, you remove something
    var currentBasket = await getBasket(this.context.id);
    var currentProducts: IProduct[] = [];
    if (currentBasket.products !== undefined) {
      currentProducts = currentBasket.products;
    }

    currentProducts.push(this.props.product);
    updateBasket(this.context.id, currentProducts);
    // ADD email and name above
  };

  render() {
    var urlstring = "Products/" + this.props.product.id;
    return (
      <div className="product">
        <NavLink to={urlstring}>
          <img src={this.props.product.imgURL}></img>
          <p>
            {this.props.product.name} {this.props.product.price}
          </p>
        </NavLink>
        {/* <p>{this.props.product.description}</p> */}
        <button type="button" onClick={() => this.handleClick()}>
          Add to Basket
        </button>
      </div>
    );
  }
}
