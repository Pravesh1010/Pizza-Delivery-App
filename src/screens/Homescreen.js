import Pizza from "../components/Pizza";
import { Switch, Route } from "react-router-dom";

// const API = "https://praveshms.herokuapp.com";

export default function Homescreen({
  handleClick,
  pizzas,
}) {
  // const [pizzas, setPizzas] = useState([]);

  // useEffect(() => {
  //   fetch(`${API}/pizzas`)
  //   .then(data => data.json())
  //   .then(piz => setPizzas(piz));
  // }, [])

  // const [cart, setCart] = useState([]);

  // const handleClick = (item) => {
  //   cart.push(item);
  //   console.log(item);
  //   console.log(cart);
  // }
  return (
    <div>
      <div className="row">
        {pizzas.map((pizza, index) => {
          return (
            <div className="col-md-4">
              <div>
                <Switch>
                  <Route exact path="/">
                    <Pizza
                      pizza={pizza}
                      key={index}
                      name={pizza.name}
                      image={pizza.image}
                      handleClick={handleClick}
                      pizzas={pizzas}
                      description={pizza.description}
                      // varient={varient}
                      // setVarient={setVarient}
                    />
                  </Route>
                </Switch>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
