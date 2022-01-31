import axios from 'axios';
import { useContext } from 'react';
import {useGetBasket} from '../hooks/use_queries';
import UserContext from '../UserContext';
import {BasketItem} from './BasketItem';



function Basket (basketId: number) {
    const user = useContext(UserContext);

    const basket =  useGetBasket(user.id);
    const products = basket.products

    var total = 0;
    if (products?.length !== undefined){
      for (var product of products) {
        if (product.price!== undefined) total += product.price
      }
    } else{
      total = 0
    }
    const emptyBasket = async () => {
        await axios.put('http://localhost:9000/baskets/'+user.id, {
          id:user.id,
          products:[]
        })

    
    }

    const handleClick = async () => {
      emptyBasket();
      window.location.href="/thank-you"

    }

    return (
      
    <div className="container">
            <div className="top_navigation_content">
            <h3>Hi {user.name}</h3>
          </div>
        <div className="jumbotron">

         {products?.map(item => (
           <div className="flex-item"  key={item.id}>
             <BasketItem product={item} />
           </div>
         ))}
        <div>
            Total: {total} DKK
        </div>
        <button onClick={() => handleClick()}>Checkout Now</button> 
        </div>
        </div>
    )
        

};
export default Basket;
