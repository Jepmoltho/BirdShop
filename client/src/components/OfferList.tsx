import {useGetProducts} from '../hooks/use_queries';
import {Product} from './Product';


function OfferList () {
    const results =  useGetProducts();
    if (results.length === 0) return null;
    
    var offers = new Array();
    results.forEach(function(item){
        if(item.isOffer === "offer") offers.push(item)
    })


    return (
      <div className="container">
      <div className="jumbotron">
        <div className="flex-container">
         {offers.map(result => (
           <div className="flex-item"  key={result.id}>
             <Product product={result} ></Product>
           </div>
         ))}
        </div>
        </div>
        </div>
    )
};
export default OfferList;
