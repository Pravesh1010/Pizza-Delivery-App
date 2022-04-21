import React, { useEffect, useState } from "react";
import StripeCheckOut from 'react-stripe-checkout';

export function Payment({subTotal}) {

    const [payInfo, setPayInfo] = useState("");
    const tokenHandler = (token) => {
        fetch("http://localhost:5000/orders", {
            method: "POST",
            body: JSON.stringify(token),
            headers: { 
                "content-type" : "application/json",
            }
        }).then(setPayInfo("Your Order is Placed"))
        .then(console.log(token))      
    }
    
  return (
    <div>
        <StripeCheckOut
        amount={subTotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey='pk_test_51KpbhwSHVuORzoRvcT8usjmKlfK1pB2mxLJejGIZf4ulOdlMrYZanUwYHXqvawcvYYNuxuN77Iow4qodMfvGbAiB00snMuGxl4'
        >
            <button className="btn btn-danger">Proceed to Pay</button>
            <h3 className="sub-total m-1 w-100">Subtotal: ${subTotal} /-</h3>
            <h1 className="text-success">{payInfo}</h1>
        </StripeCheckOut>

    </div>
  );
}

