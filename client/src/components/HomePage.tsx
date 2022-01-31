import UserGreeting from "./UserGreeting";
import { useContext, useState } from "react";
import Filter from './Filters';
import UserContext from "../UserContext";
function HomePage() {
  
  const user = useContext(UserContext);

  return (
    <body>
      <div className="container">
          <UserGreeting/>
          <Filter/>
        </div>
    </body>
  );
}

export default HomePage;