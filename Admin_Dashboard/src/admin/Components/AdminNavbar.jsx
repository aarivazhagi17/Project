import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from 'aos';
function AdminNavbar() {
  const navigate = useNavigate();

  //AOS Animation
   useEffect(()=>{
      AOS.init({
        duration: 1000,
        once:true
      });
    },
  []);
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div data-aos="fade-down"
      style={{
        background: "#0b2b60",
        top:"0",
        left:"0",
        color: "white",
        padding: "7px",
        height:"50px",
        zIndex:"1000",
        paddingTop: "6px",
        position:"fixed",
        width:"99%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 data-aos="fade-right">Admin Panel</h2>

      <button data-aos="fade-left"
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