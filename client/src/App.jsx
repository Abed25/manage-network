import React from "react";
import Admin from "./pages/admin";
import Home from "./pages/Home";
import Userpage from "./pages/Userpage";
import Test from "./pages/Test";
import { Route, Routes } from "react-router-dom";
export default function () {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Dashboard" element={<Admin />}></Route>
        <Route path="/myaccount" element={<Userpage />}></Route>
        <Route path="/test" element={<Test />}></Route>
      </Routes>
    </div>
  );
}
