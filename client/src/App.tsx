import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import HomePage from './components/HomePage';
import Hero from './components/Hero';
import Basket from './components/Basket';
import UserContext from './UserContext';
import OfferList from './components/OfferList'
import ThankYou from './components/ThankYou';
import Login from './components/Login';
import Products from "./components/Products";
import TopNav from "./components/TopNav";

let currentUserID = JSON.parse(sessionStorage.getItem("currentUserID")!);
let currentUserName = sessionStorage.getItem("currentUserName")!;
let currentUserEmail = sessionStorage.getItem("currentUserEmail")!;


const user = {
  id: currentUserID,
  name: currentUserName,
  email: currentUserEmail
}

function App(){
  return (
    <UserContext.Provider value={user}>
    <div className="App">
        <Header/>
        <BrowserRouter>
          <TopNav/>
          <Hero/>
              <Switch>
                      <Route exact path="/" component={Login} />
                      <Route path="/basket" component={Basket} />
                      <Route path="/offers" component={OfferList} />
                      <Route path="/products/$id" component={Products} />
                      <Route path="/homepage" component={HomePage} /> 
                      <Route path="/thank-you" component={ThankYou} /> 
                      <Route path="/products/:id" component = {Products}/>

              </Switch>
      </BrowserRouter>
      </div>
      </UserContext.Provider>
  )
}

export default App; 
