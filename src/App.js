import "./App.css";
import NavBar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import Cart from "./screens/Cart";
import { Switch, Route } from "react-router-dom";
import { SignUp, UserLogin } from "./screens/UserLogin";
import { CartProvider } from "react-use-cart";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Admin, {
  AddPizzas,
  OrdersList,
  PizzaList,
  UsersList,
} from "./screens/Admin";
import { AdminLogin } from "./AdminLogin";
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
    if (userName == "Login") {
      return alert("login to order");
    }
    pizza.totalPrice = `${total}`;
    pizza.quantity = `${quantity}`;
    pizza.addOns = `${addOns}`;
    pizza.userName = `${userName}`;
    setCartItems([...cartItems, pizza]);
    setSubTotal(total + subTotal);
  };

  const [login, setLogin] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:5000/users")
    fetch(`${API}/users`)

      .then((data) => data.json())
      .then((log) => setLogin(log));
  }, []);

  const [userName, setUserName] = useState("Login");
  const [userId, setUserId] = useState("");
  const [msg, setMsg] = useState("");
  const handleLogin = () => {
    login.map((userDetails) => {
      if (userDetails.username === user && userDetails.password === password) {
        history.push("/");
        setUserName(userDetails.username);
        setUserId(userDetails._id);
      } else {
        setMsg("Invalid Credentials");
      }
    });
  };

  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const history = useHistory();

  return (
    <div className="App">
      <NavBar cartItems={cartItems} userName={userName} />
      <CartProvider>
        <Homescreen handleClick={handleClick} pizzas={pizzas} />
      </CartProvider>
      <Switch>
        <Route exact path="/cart">
          <Cart
            cartItems={cartItems}
            setCartItems={setCartItems}
            subTotal={subTotal}
            userName={userName}
            userId={userId}
          />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/login">
          <div className="userAndAdmin">
            <UserLogin
              login={login}
              handleLogin={handleLogin}
              msg={msg}
              user={user}
              password={password}
              setUser={setUser}
              setPassword={setPassword}
            />
            <AdminLogin />
          </div>
        </Route>
        <Route exact path="/admin">
          <Admin pizzas={pizzas} login={login} />
        </Route>
        <Route exact path="/admin/userlist">
          <UsersList login={login} />
        </Route>
        <Route exact path="/admin/pizzalist">
          <PizzaList pizzas={pizzas} cartItems={cartItems} />
        </Route>
        <Route exact path="/admin/addpizza">
          <AddPizzas />
        </Route>
        <Route exact path="/admin/orders">
          <OrdersList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
