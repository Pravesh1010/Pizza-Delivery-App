import { useState } from "react";
import { useHistory } from "react-router-dom";

export function UserLogin({
  handleLogin,
  user,
  password,
  setUser,
  setPassword,
  msg,
})
 {
  const history = useHistory();
  return (
    <div className="w-50 p-3 signup">
      <form className="signInDetails">
        <h1 className="text-white">User Login</h1>
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label text-white">
            Username
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control"
              id="inputEmail3"
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label text-white">
            Password
          </label>
          <div class="col-sm-10">
            <input
              type="password"
              class="form-control"
              id="inputPassword3"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
      </form>
      <button type="submit" class="btn btn-white" onClick={handleLogin}>
        Login
      </button>

      {msg ? <SignUp /> : <h3 className="text-dark invalid">{msg}</h3>}
      {/* {msg ? <button className="text-primary" onClick={() => history.push("/signup")}>Register</button> : <h3 className="text-dark invalid">{msg}</h3>} */}
    </div>
  );
}

export function SignUp() {
  const [signUpMsg, setSignUpMsg] = useState("");

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  const history = useHistory();

  return (
    <div className="signup">
      <h3 className="text-white">Register and then login</h3>
      <form className="signInDetails">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4" className="text-white">User Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Name"
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputEmail4" className="text-white">Password</label>
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="inputPassword4" className="text-white">Email</label>
            <input
              type="Email"
              class="form-control"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress" className="text-white">Address</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity" className="text-white">City</label>
            <input
              type="text"
              class="form-control"
              id="inputCity"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </div>
      </form>
      <button
        class="btn btn-white"
        onClick={() => {
          const newUser = {
            username: user,
            password: password,
            email: email,
            address: address,
            city: city,
          };

          fetch("http://localhost:5000/users/signup", {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
              "content-type": "application/json",
            },
          })
            .then(() => console.log(newUser))
            .then(() => setSignUpMsg("Sign up Successful"))
        }}
      >
        Sign in
      </button>
      <button className="btn btn-white" onClick={() => history.push("/login")}>Login</button>
      {signUpMsg ? <h3 className="text-white invalid">{signUpMsg} !!</h3> : ""}
    </div>
  );
}
