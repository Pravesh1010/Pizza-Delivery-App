import "./App.css";
import NavBar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import Cart from "./screens/Cart";
import { Switch, Route } from "react-router-dom";
import { UserLogin } from "./screens/UserLogin";
import { CartProvider } from "react-use-cart";
import { useState, useEffect } from "react";
const API = "https://praveshms.herokuapp.com";

function App() {
  const [pizzas, setPizzas] = useState([]);

  
  useEffect(() => {
    fetch(`${API}/pizzas`)
      .then((data) => data.json())
      .then((piz) => setPizzas(piz));
  }, []);



  const [cartItems, setCartItems] = useState([]);

  const handleClick = (pizza, total, quantity, addOns) => {
    pizza.totalPrice = `${total}`;
    pizza.quantity = `${quantity}`;
    pizza.addOns = `${addOns}`;
    setCartItems([...cartItems, pizza]);
  };
  return (
    <div className="App">
      <NavBar cartItems={cartItems}/>
      <CartProvider>
        <Homescreen handleClick={handleClick} pizzas={pizzas} />
      </CartProvider>
      <Switch>
        <Route exact path="/cart">
          <Cart cartItems={cartItems} setCartItems={setCartItems} />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/login">
          <UserLogin />
        </Route>
      </Switch>
    </div>
  );
}

// function AdminScreen () {
//   return(
//     <div>

//     </div>
//   )
// }
export default App;
