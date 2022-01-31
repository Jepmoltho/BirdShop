import { useParams } from "react-router";
import { useGetProduct, useGetProducts } from "../hooks/use_queries";
import axios from "axios";
import { IBasket, IProduct } from "../types/types";
import { get } from "../fetchers/fetchers";
import React, { useContext } from "react";
import UserContext from "../UserContext";

function Products() {
  const contextType = useContext(UserContext);

  const results = useGetProducts();
  const { id } = useParams<{ id: string }>();
  const product = useGetProduct(id);
  if (results.length === 0) return null;

  var offers = new Array();
  results.forEach(function (item) {
    if (item.id === product.id) offers.push(item);
  });

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

  const handleClick = async () => {
    //Instead of adding something, you remove something
    var currentBasket = await getBasket(contextType.id);
    var currentProducts = currentBasket.products;
    currentProducts.push(product);
    updateBasket(contextType.id, currentProducts);
    // ADD email and name above
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <img src={"../" + product.imgURL}></img>
        <p>{product.name}</p>

        <p>{product.price}</p>

        <button type="button" onClick={() => handleClick()}>
          Add to Basket
        </button>

        <p>{product.description}</p>
      </div>
    </div>
  );
}
export default Products;
