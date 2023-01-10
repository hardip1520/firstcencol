import React, { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { addNewUser } from "../Redux-toolkit/TotaluserSlice";

const Signup = () => {
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();

  const dispatch = useDispatch();

const handleSubmit = (e) =>{
    e.preventDefault()
    dispatch(addNewUser({ Email, Password }));
}


  return (
    <>
      <div className="main-continer">
        <form onSubmit={handleSubmit}>
          <h1 class="h3 mb-3 fw-normal">Please sign up Here</h1>

          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              autoComplete="off"
              placeholder="name@example.com"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              value={Password}
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label
              for="floatingPassword"
              
            >
              Password
            </label>
          </div>

          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
