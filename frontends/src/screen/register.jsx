import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { registerAction } from "../actions/workoutActions";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const [username, setusername] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const dispatch = useDispatch();
    const token = localStorage.getItem("userInfo")
    const nav = useNavigate()

    useEffect(()=>{

      if(token){
        nav("/home")
      }

    }, [])

    const handleRegister = (e) => {
        e.preventDefault()

        const registerData = {username, email, password}

        dispatch(registerAction(registerData))
    }


  return (
    <div class="row">
      <div class="col-sm-4">
        <div class="card">
          <form onSubmit = {handleRegister}>
            <label>Username:</label>
            <br />
            {/* e is the change (e is like when i put like a word or type a word or hover)
                target is the element (input element)
                value is the value of target
            */}
            <input type="text" onChange = {e => setusername(e.target.value)} ></input>
            <br />
            <label>Email:</label>
            <br />
            <input type="email" onChange = {e => setemail(e.target.value)}></input> <br />
            <label>Password:</label>
            <br />
            <input type="password" onChange = {e => setpassword(e.target.value)}></input>
            <br />
            <button> Register! </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
