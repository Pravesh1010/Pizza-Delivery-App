import React, { useState } from "react";

const Cart = ({ cartItems }) => {
  // const [total, setTotal]  = useState(0);
  let total = 0;
  console.log(cartItems);
  if (cartItems.length == 0){
    return <h1>Your Cart is Empty</h1>
  }
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
      </div>
      {/* <div>
        {cartItems.map((items) => {
          total = parseInt(total) + parseInt(items.totalPrice);
          return <div>{total}</div>;
        })}
      </div> */}
    </div>
  );
};

export default Cart;
