import React from "react";
// import { Switch, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

//call pagses
import Home from "./pages/Home";
import Paket from "./pages/Paket";
import Karyawan from "./pages/User";
import Outlet from "./pages/Outlet";
import Member from "./pages/Member";
import Transaksi from "./pages/Transaksi";
import User from "./pages/User";
import Login from "./pages/Login";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/paket" element={<Paket />} />
      <Route path="/karyawan" element={<Karyawan />} />
      <Route path="/outlet" element={<Outlet />} />
      <Route path="/member" element={<Member />} />
      <Route path="/transaksi" element={<Transaksi />} />
      <Route path="/User" element={<User />} />
    </Routes>
  );
}
