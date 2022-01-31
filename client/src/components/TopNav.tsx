import { NavLink } from "react-router-dom";


function topNav(){
    return (
        <ul>
                <li>
                  <NavLink exact activeClassName="active" to="/">
                      Login
                  </NavLink>
                </li>
                <li>
                <NavLink activeClassName="active" to="/homepage">
                     Home
                  </NavLink>
                
                </li>
                  <li>
                  <NavLink activeClassName="active" to="/offers">
                      Offers
                  </NavLink>
                  </li>
                  <li>
                  <NavLink activeClassName="active" to="/basket">
                      Basket
                </NavLink>
                  </li>
          </ul>
    );
}

export default topNav;