import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Pizza({ pizza }) {
    const [quantity, setQuantity] = useState(1);
    const [varient, setVarient] = useState('small');
    const [base, setBase] = useState('Refined Wheat Bread');

    const [cartItems, setCartItems] = useState([]);

    const history = useHistory();

    
  return (
    <div>
      <h1 className="name">{pizza.name}</h1>
      <img
        src={pizza.image}
        alt={pizza.name}
        className="img-fluid"
        style={{ height: "200px", width: "200px" }}
      ></img>

      <div className="flex-container">
        <div className="w-100">
          <p>Varients</p>
          <select value={varient} onChange={(e) => setVarient(e.target.value)}>
            {pizza.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>
        <div className="w-100">
          <p>Base</p>
          <select value={base} onChange={(e) => setBase(e.target.value)}>
            {pizza.base.map((base) => {
              return <option value={base}>{base}</option>;
            })}
          </select>
        </div>
        <div className="w-100">
          <p>Quantity</p>
          <select  value={quantity} onChange={(e) => setQuantity(e.target.value)}>
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="flex-container">
            <div className="m-1 w-100">
                <h1 className="price"> Price: {pizza.prices[0][varient] * quantity} Rs/-</h1>
            </div>
            <div className="m-1 w-100">
                <button className="btn btn-dark btn-sm">ADD TO CART</button>
            </div>
      </div>
    </div>
  );
}


