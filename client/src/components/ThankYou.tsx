import { useContext } from 'react';
import UserContext from '../UserContext';


function ThankYou() {

    const user = useContext(UserContext);

    return (
        <div className="container">
            <div className="jumbotron">
                Thank you {user.name}, we really needed that money to buy the other birds some more seeds.
                <p>
                    -------
                </p>
                <p>
                <button onClick={() => {window.location.href="/"}}>Buy more Birds</button>
                </p>
                
            </div>
        </div>
    )
};
export default ThankYou;
