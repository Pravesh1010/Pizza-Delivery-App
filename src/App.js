import './App.css';
// import bootstart from '../node_modules/bootstrap/dist/css/bootstart.min.css';
import NavBar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import { useHistory, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    
     <NavBar />
     <Homescreen />
    <Switch>
      <Route path="/cart">
        <Cart />
      </Route>
    </Switch>
      </div>
  );
}

function Cart(){
  return <div>
    <h1>Cart items</h1>
  </div>
}

export default App;
