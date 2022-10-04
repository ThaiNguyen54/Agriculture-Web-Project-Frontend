import React, { useState } from "react";
import FormLogin from "./FormLogin";
import ClockCurrent from "./store/ClockCurrent";
import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom"
import Login from "../pages/Login";
import Home from "../pages/Home";
import About from "../pages/About";
import NewFeed from "../pages/NewFeed";
function App() {

  return (
    <Routes>
      <Route path="/" element = {<Login />} />
      <Route path="newfeed" element = {<NewFeed />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
}

export default App;