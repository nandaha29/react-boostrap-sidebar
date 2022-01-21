// Navbar === sidebar
// memakai children biar nanti ada ruang isi content

import React from "react";

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
