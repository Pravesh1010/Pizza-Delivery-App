import "./App.css";
import NavBar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import Cart from "./screens/Cart";
import { Switch, Route } from "react-router-dom";
import { UserLogin } from "./screens/UserLogin";
import { CartProvider } from "react-use-cart";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
const API = "https://praveshms.herokuapp.com";

function App() {
  const [pizzas, setPizzas] = useState([]);
  
  useEffect(() => {
    fetch(`${API}/pizzas`)
      .then((data) => data.json())
      .then((piz) => setPizzas(piz));
  }, []);

  const [cartItems, setCartItems] = useState([]);
  const [subTotal, setSubTotal] = useState(0);

  const handleClick = (pizza, total, quantity, addOns) => {
    pizza.totalPrice = `${total}`;
    pizza.quantity = `${quantity}`;
    pizza.addOns = `${addOns}`;
    setCartItems([...cartItems, pizza]);
    setSubTotal(total + subTotal);
  };


  const [login, setLogin] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((data) => data.json())
      .then((log) => setLogin(log));
  }, []);

  const [userName, setUserName] = useState("Login")
  const handleLogin = () => {
    login.map((userDetails) => {
      if(userDetails.username === user && userDetails.password === password){
        history.push('/');
        setUserName(userDetails.username);
      }
    })
  }

  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const history = useHistory();

  return (
    <div className="App">
      <NavBar cartItems={cartItems} userName={userName}/>
      <CartProvider>
        <Homescreen handleClick={handleClick} pizzas={pizzas} />
      </CartProvider>
      <Switch>
        <Route exact path="/cart">
          <Cart cartItems={cartItems} setCartItems={setCartItems} subTotal={subTotal}/>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/login">
          <UserLogin login={login} handleLogin={handleLogin} user={user} password={password} setUser={setUser} setPassword={setPassword}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
