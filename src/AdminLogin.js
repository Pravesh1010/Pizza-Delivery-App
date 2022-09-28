import { useState } from "react";
import { useHistory } from "react-router-dom";


export function AdminLogin() {
  const adminCredentails = {
    email: "praveshmsp@gmail.com",
    password: "praveshadmin",
  };

  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [invalid, setInvalid] = useState("");
  const handleClick = () => {
    if (adminCredentails.email === email &&
      adminCredentails.password === password) {
      history.push("/admin");
    } else {
      setInvalid("Invalid Credentials");
    }
  };

  return (
    <div className="w-50 p-3 signup">
      <form className="signInDetails">
        <h1 className="text-white">Admin Login</h1>
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label text-white">
            Username
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control"
              id="inputEmail3"
              onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <div class="row mb-3">
          <label
            for="inputPassword3"
            class="col-sm-2 col-form-label text-white"
          >
            Password
          </label>
          <div class="col-sm-10">
            <input
              type="password"
              class="form-control"
              id="inputPassword3"
              onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>
      </form>
      <button type="submit" class="btn btn-white" onClick={handleClick}>
        Login
      </button>
      <h1>{invalid}</h1>
    </div>
  );
}
