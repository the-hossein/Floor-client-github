import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";

import MainPage from "./components/mainPage/MainPage";
import Pricing from "./components/mainPage/pricing/Pricing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage  type="main" />}></Route>
      <Route path="/login" element={<MainPage type="login" />}></Route>
      <Route path="/otp" element={<MainPage type="otp" />}></Route>
      <Route path="/role" element={<MainPage type="role" />}></Route>
      <Route path="/registration" element={<MainPage type="registration" />}></Route>
      <Route path="/pricing" element={<Pricing />}></Route>
    </Routes>
  );
}

export default App;
