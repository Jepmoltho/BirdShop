import { useContext } from "react";
import UserContext from '../UserContext';


export default function UserGreeting() {
    const user = useContext(UserContext);

    return (
          <div className="top_navigation_content">
            <h3>Hi {user.name}</h3>
            <a href="basket">Shopping basket </a><img src="images/shoppingbasket.svg" className="shoppingbasket_logo" alt="..." />
          </div>


    )}