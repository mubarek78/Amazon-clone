import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {BrowserRouter, Router, Routes, Route} from "react-router-dom"
import CheckOut from './Components/checkout/Checkout';
import Orders from './Components/Order/Orders';
import Login from './Components/Login/Login';
import React, { useEffect } from "react";
import { auth } from './Components/firebase/firebase';
import { useStateValue } from './Components/StateProvider/StateProvider';
import Payment from './Components/Payment/Payment';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
// import Orders from './Components/Orders/Orders';



const promise = loadStripe('pk_test_51KOCtTDE5OEXGmx2bbPEAWlCzsEip6v3kfJ1TnwuJw3n9bxrISycZlw8SA5HRsQB0Xs1nvPfhQxjTkZjUYQZmsM800c3B2bvJZ');

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
    
    <Routes>
    
    <Route path="/" element={<><Header/><Home/></>}/>
    <Route path="orders" element={<><Header /><Orders /></>}/>
     
      
      <Route  path="login" element={<><Login/></>}/>
       
      <Route  path="payment" element={<> <Payment  stripe={promise}/></>}/>
      
      {/* <Route path="/payment">
      
        <Payment />
     
      </Route> */}
     
      <Route exact path="checkout" element={<><Header/><CheckOut /></>}/>
      
      {/* <Route path="/">
      <Header />
      <Home />
      </Route> */}
      
      
    
    </Routes>
    
    
  );
}

export default App;
