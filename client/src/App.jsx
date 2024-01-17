import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Protected from "./components/Protected";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import RecoverPassword from "./components/auth/RecoverPassword";
import Home from "./components/home/Home";
import SecretProvider from "./components/context/SecretProvider";
import "./App.css";

function App() {
  return (
    <SecretProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/recoverpassword" element={<RecoverPassword />} />
          <Route path="/" element={<Protected Component={Home} />} />
        </Routes>
      </BrowserRouter>
    </SecretProvider>
  );
}

export default App;
