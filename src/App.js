import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CheckOut from './Components/CheckOut/CheckOut';
import Login from './Components/Login/Login';
import React, { useEffect } from "react";
import { auth } from './Components/firebase/firebase';
import { useStateValue } from './Components/StateProvider/StateProvider';
import Payment from './Components/Payment/Payment';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Components/Orders/Orders';



const promise = loadStripe('pk_test_51ILWaRK6FJ4NvQJQAfitXtvoOesU79Mex29dVJK0y2CXbqoOdmeceakJ0NaCWwvKbUuKTtaSsOj4U2KQeBtfoNZA005UNamqdp');

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(()=> {
auth.onAuthStateChanged((authUser) => {

  if (authUser) {


    dispatch({
      type:'SET_USER',
      user: authUser,
    });
  } else {
    
    dispatch({
      type:'SET_USER',
      user: null,
    });
  }
});
  }, []);


  return (
    <Router>
    <div className="App">
      <Switch> 
      <Route path="/orders">
      <Header />
      <Orders />
      </Route>
      <Route path="/login">
      <Login/>
      </Route>

      <Route path="/payment">
      <Elements stripe={promise}> 
        <Payment />
     </Elements>
      </Route>
      <Route path="/checkout">
      <Header />
      <CheckOut />
      </Route>
      <Route path="/">
      <Header />
      <Home />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
