import React from "react";
import { useEffect, useState } from "react";
import {useDispatch} from "react-redux"
import { loginAction } from "../actions/workoutActions";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()
    const nav = useNavigate()
    const token = localStorage.getItem("userInfo")

    console.log(token)


    useEffect(()=>{
        if(token){
            nav("/home")
        }
    })


    const handleLogin = (e) =>{
        e.preventDefault()

        const formData = {email, password}

        dispatch(loginAction(formData, nav))
    }


  return (
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <form onSubmit={handleLogin}>
            <h1> Login </h1>

            <label>Email</label>
            <input type="email" onChange = {e => setEmail(e.target.value)}></input>

            <label>Password</label>
            {/* no space between input */}
            <input type="password" onChange = {e => setPassword(e.target.value)}></input>

            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
