import React from 'react';
import Payment from './..//Payment/Payment';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const promise = loadStripe('pk_test_51KOCtTDE5OEXGmx2bbPEAWlCzsEip6v3kfJ1TnwuJw3n9bxrISycZlw8SA5HRsQB0Xs1nvPfhQxjTkZjUYQZmsM800c3B2bvJZ');

function Payments() {
  return (
  <Elements stripe={promise}>
         <Payment />
   </Elements>      
  );
}

export default Payments;
