import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from './PaymentForm';
const stripePromise = loadStripe(
  "pk_test_51JfO0wBPNeYEdLkZ47TGmT63HYDnz0hV2BH8OnBqCtXm1Zwh4wsn3AehwTQvKxwlSxCOWQK98crk8nuXoYpRc59P00A7gSkZW7"
);

const ProcessPayment = ({ handlePayment }) => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm handlePayment={handlePayment}></PaymentForm>
    </Elements>
  );
};

export default ProcessPayment;