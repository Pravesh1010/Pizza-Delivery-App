import React from "react";
import { useState } from "react";
import { useCart } from "react-use-cart";

export default function Pizza({ pizza, name, image, pizzas, handleClick, description }) {
  const [quantity, setQuantity] = useState(1);
  // const [varient, setVarient] = useState("small");
  const [base, setBase] = useState("Refined Wheat Bread");

  const [cheese, setCheese] = useState("None");
  const [veggies, setVeggies] = useState("None");

  const veggiesPicked = pizza.veggiesPrices[0][veggies];
  const cheesePicked = pizza.cheesePrices[0][cheese];
  const addOns = parseInt(veggiesPicked) + parseInt(cheesePicked);
  const totalPrice = (parseInt(addOns) + parseInt(pizza.pizzaPrice)) * quantity;

  return (
    <div className="shadow-lg p-3 mb-5 bg-white rounded border-left border-dark border-5">
      <h1 className="name">{name}</h1>
      <img
        src={image}
        alt={name}
        className="img-fluid"
        style={{ height: "200px", width: "200px" }}
      ></img>
      <p className="font-italic text-secondary">{description}</p>

      <div className="flex-container1">
        <div className="flex-container">
          <p>Choose Veggies</p>
          <select value={veggies} onChange={(e) => setVeggies(e.target.value)}>
            {pizza.veggies.map((veggies) => {
              return (
                  <option value={veggies}>{veggies}</option>
              );
            })}
          </select>
        </div>
        <div className="w-100 flex-container">
          <p>Choose Cheese</p>
          <select value={cheese} onChange={(e) => setCheese(e.target.value)}>
            {pizza.cheese.map((cheese) => {
              return <option value={cheese}>{cheese}</option>;
            })}
          </select>
        </div>
        <div className="w-100 flex-container">
          <p>Choose Base</p>
          <select value={base} onChange={(e) => setBase(e.target.value)}>
            {pizza.base.map((base) => {
              return <option value={base}>{base}</option>;
            })}
          </select>
        </div>
        <div className="w-100 flex-container">
          <p>Quantity</p>
          <select
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="flex-container">
        <div className="m-1 w-100">
          <h1 className="price"> ${pizza.pizzaPrice} </h1>
        </div>
        <div className="m-1 w-100" key={pizza.id}>
          <button
            className="btn btn-dark btn-sm"
            onClick={() => handleClick(pizza, totalPrice, quantity, addOns)}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}
