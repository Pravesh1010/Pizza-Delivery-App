import React, { useState } from "react";
import { Payment } from "../Payment";

const Cart = ({ cartItems, subTotal,userName, userId }) => {
  // const [total, setTotal]  = useState(0);
  // const [subTotal, setSubTotal] = useState(0);
  console.log(cartItems);
  if (cartItems.length == 0){
    return <h1>Your Cart is Empty</h1>
  }
  // let total = 0
  // const handleCheckOut = () => {
  //   cartItems.map((totalAmount) => {
  //     let total = parseInt(subTotal) + parseInt(totalAmount.totalPrice);
  //   })
  //   setSubTotal(total)
  // }
  return (
    <div>
      <div className="row">
        {cartItems.map((items, index) => {
          return (
            <div className="col-md-4">
              <div>
                <h1>{items.name}</h1>
                <img
                  src={items.image}
                  style={{ height: "200px", width: "200px" }}
                ></img>
                <p>Quantity: {items.quantity}</p>
                <p className="text-info">Add Ons: $ {items.addOns}</p>
                <h1 className="price text-success">Total Price: $ {items.totalPrice}</h1>
              </div>
            </div>
          );
        })}
      {/* <h3 className="text-success sub-total">SubTotal: $ {subTotal}</h3> */}
        <Payment subTotal={subTotal} cartItems={cartItems} userName={userName} userId={userId}/>
        {/* {cartItems.map((items) => {
          total = parseInt(subTotal) + parseInt(items.totalPrice);
          return <div>{setSubTotal(total)}</div>;
        })} */}
      </div>
    </div>
  );
};

export default Cart;
