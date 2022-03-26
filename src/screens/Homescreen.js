import React from "react";
import Pizza from "../components/Pizza";
import pizzas from "../pizzaData";
import Cart from "./Cart";
import { useHistory, Switch, Route } from "react-router-dom";

export default function Homescreen() {
  const history = useHistory();
  return (
    <div>
      <div className="row">
        {pizzas.map((pizza) => {
          return (
            <div className="col-md-4">
              <div>
                <Switch>
                  <Route path="/">
                    <Pizza pizza={pizza} />
                  </Route>
                  {/* <Route path="/cart">
                    <Cart />
                  </Route> */}
                </Switch>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
