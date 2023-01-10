import React, { useState } from "react";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { loginuser } from "../Redux-toolkit/SingleuserSlice";

const Login = () => {
  const dispatch = useDispatch();

  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const { users } = useSelector((state) => state.totalusers);



  const handleLogin = () => {
    const user = users.find(
      (e) => e.Email === email && e.Password === password
    );
    if (user) {
      console.log(user);
      dispatch(loginuser({ user }));
      console.log("succsess");
    } else {
      console.log("not success");
    }
  };

  return (
    <>
      <div className="main-continer">
        <div>
          <h1 class="h3 mb-3 fw-normal">Login from here</h1>

          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              autoComplete="off"
              value={email}
              placeholder="name@example.com"
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              value={password}
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label for="floatingPassword">Password</label>
          </div>

          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button
            class="w-100 btn btn-lg btn-primary"
            onClick={() => handleLogin()}
          >
            Login
          </button>
          <p class="mt-5 mb-3 text-muted">© 2017–2021</p>
        </div>
      </div>
    </>
  );
};

export default Login;
