// dashboard -> utk template dasar setiap tampilan

import React from "react";
import Navbar from "../../components/elements/Navbar/Navbar";
import { Link } from "react-router-dom";

export default function Dashboard({ children }) {
  const sidebarContent = [
    {
      label: "Dashboard",
      target: "/home",
      // icon: "icon/estate.svg",
    },
    {
      label: "Paket",
      target: "/paket",
    },
    {
      label: "User",
      target: "/user",
    },
    {
      label: "Member",
      target: "/Member",
    },
    {
      label: "Outlet",
      target: "/outlet",
    },
    {
      label: "Transaksi",
      target: "/transaksi",
    },
    {
      label: "Login",
      target: "/login",
    },
  ];

  return (
    <div className="container-fluid">
      <div className="d-flex">
        <div className="border-end min-vh-100">
          <h2 className="sidebar-heading p-3 m-3 bg-warning">LaundryAja</h2>
          <div className="list-group list-group-flush m-3">
            {sidebarContent.map(({ target, label, icon }, i) => (
              <Link to={target} className="list-group-item list-group-item-action list-group-item-light p-3" key={i}>
                {/* <p>{icon}</p> */}
                {label}
              </Link>
            ))}
          </div>
        </div>
        {/* <!-- Page content--> */}
        <div className="container-fluid bg-warning p-4">
          <Navbar />
          {children}
        </div>
      </div>
    </div>
  );
}
