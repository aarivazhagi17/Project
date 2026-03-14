import React from "react";
import { useNavigate } from "react-router-dom";
function AdminNavbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div
      style={{
        background: "#0b2b60",
        top:"0",
        left:"0",
        color: "white",
        padding: "7px",
        paddingTop: "6px",
        position:"fixed",
        width:"99%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>Admin Panel</h2>

      <button
      onClick= {handleLogout}
        style={{
          padding: "8px 15px",
          background: "red",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        Logout
      </button>
    </div>
  );
}
export default AdminNavbar;