import React from "react";
// import Navbar from "../../components/elements/Navbar/Navbar";

export default function Dashboard({ children }) {
  return (
    <div className="container-fluid">
      {/* <!-- Page content--> */}
      <div className="container-fluid">
        <div className="bg-success p-3">wewe</div>
        {children}
      </div>
    </div>
  );
}
