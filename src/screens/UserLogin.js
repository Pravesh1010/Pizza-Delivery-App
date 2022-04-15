import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export function UserLogin() {
  const history = useHistory();

  const [login, setLogin] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((data) => data.json())
      .then((log) => setLogin(log));
  }, []);

  const handleLogin = () => {
    login.map((userDetails) => {
      if(userDetails.username === user && userDetails.password === password){
        history.push('/');
        console.log("Welcome");
      }
    })
    // console.log(login);
  }

  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <div className="w-50 p-3">
      <form>
        <h1>User Login</h1>
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3" onChange={(e) => setUser(e.target.value)}/>
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label">
            Password
          </label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword3"  onChange={(e) => setPassword(e.target.value)}/>
          </div>
        </div>  
        </form>  
        <button type ="submit" class="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
        <button class="btn btn-primary" onClick={() => {
          const newUser = {
            username: user,
            password: password,
          }

          fetch("http://localhost:5000/users/signup", {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
              "content-type" : "application/json",
            }, 
          }).then(() => console.log(newUser));
        }}>
          Sign up
        </button>
    </div>
  );
}
