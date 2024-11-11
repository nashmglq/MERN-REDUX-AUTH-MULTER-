import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screen/home";
import Navbar from "./component/navbar";
import DetailView from "./screen/detail";
import Login from "./screen/login";
import Register from "./screen/register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="page">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="home/:id" element={<DetailView/>}/>
            <Route path= "/register" element= {<Register/>}/>
            <Route path= "/" element= {<Login/>}/>

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

{
  /*
        <BrowserRouter> wraps the whole app for routing.
        Anything inside <BrowserRouter> but outside <Routes> (like <Navbar/>) shows on every page.
        <Routes> holds specific pages that show only for matching paths. 
        */
}
