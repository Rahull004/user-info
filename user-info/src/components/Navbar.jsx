import React from "react";

const Navbar = ({ userCount = 50 }) => {
  return (
    <div className="navbar">
      <h1>User Directory</h1>
      <p>{userCount} Users | Theme: Corporate</p>
    </div>
  );
};

export default Navbar;