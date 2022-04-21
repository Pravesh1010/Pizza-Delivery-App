import React, { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

export default function Admin({ pizzas, login }) {
  const history = useHistory();

  const [display, setDisplay] = useState(true);

  const styles = {
    display: "block",
  };
  return (
    <div>
      <h1>Admin panel</h1>
      <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-fixed">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <button
                class="btn btn-outline-dark"
                onClick={() => history.push("/admin/pizzalist")}
              >
                Pizzas List
              </button>
            </li>
            <li class="nav-item">
              <button
                class="btn btn-outline-dark"
                onClick={() => history.push("/admin/addpizza")}
              >
                Add Pizza
              </button>
            </li>
            <li class="nav-item">
              <button
                class="btn btn-outline-dark"
                onClick={() => history.push("/admin/userlist")}
              >
                Users
              </button>
            </li>
            <li class="nav-item">
              <button class="btn btn-outline-dark" href="#">
                Orders
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* <UsersList login={login} /> */}

      {/* <PizzaList pizzas={pizzas} style={styles} /> */}
      {/* <AddPizzas /> */}
    </div>
  );
}

export function PizzaList({ pizzas }) {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Pizzas</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
          </tr>
        </thead>
        <tbody>
          {pizzas.map((pizza, index) => {
            return (
              <tr className="text-secondary">
                <td>{index + 1}</td>
                <td>{pizza.name}</td>
                <td>Rs {pizza.pizzaPrice}/-</td>
                <td>{pizza.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function UsersList({ login }) {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">City</th>
          </tr>
        </thead>
        <tbody>
          {login.map((users, index) => {
            return (
              <tr className="text-secondary">
                <td>{index + 1}</td>
                <td>{users.username}</td>
                <td>{users.email}</td>
                <td>{users.address}</td>
                <td>{users.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function AddPizzas() {
  const [name, setName] = useState("");
  const base = [
    "Whole Wheat",
    "Refined Wheat",
    "Italian Bread",
    "Thin Crust",
    "Cheese Crust",
  ];
  const cheese = [
    "None",
    "Mozzarella",
    "Cheddar",
    "Parmesan",
    "CheeseBurst",
    "Emmental",
  ];
  const veggies = ["None", "onion", "capsicum", "mushroom", "tomato"];
  const [pizzaPrice, setPizzaPrice] = useState("");
  const cheesePrices = [
    {
      None: 0,
      Mozzarella: 120,
      Cheddar: 150,
      Parmesan: 140,
      CheeseBurst: 155,
      Emmental: 120,
    },
  ];
  const veggiesPrices = [
    {
      None: 0,
      onion: 40,
      capsicum: 30,
      mushroom: 45,
      tomato: 20,
    },
  ];

  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Pizza Name</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="inputEmail3"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Pizza Price</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="inputPassword3"
            placeholder="Add price"
            value={pizzaPrice}
            onChange={(e) => setPizzaPrice(e.target.value)}
          />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Category</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="inputPassword3"
            placeholder="Add Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Image</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="inputPassword3"
            placeholder="Add image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Description</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="inputPassword3"
            placeholder="Add description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <button
        className="btn btn-success"
        onClick={() => {
          const nPizza = {
            name: name,
            base: base,
            cheese: cheese,
            veggies: veggies,
            pizzaPrice: pizzaPrice,
            cheesePrices: cheesePrices,
            veggiesPrices: veggiesPrices,
            category: category,
            image: image,
            description: description,
          };
          fetch("http://localhost:5000/pizzas", {
            method: "POST",
            body: JSON.stringify(nPizza),
            headers: {
              "content-type": "application/json",
            },
          }).then(() => console.log(nPizza));
        }}
      >
        Add Pizza
      </button>
    </div>
  );
}
