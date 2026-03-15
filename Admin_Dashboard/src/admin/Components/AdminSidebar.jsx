import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
 function AdminSidebar() {

  //AOS Animation use effect
  useEffect(()=>{
    AOS.init({
      duration: 1500,
      once:true
    });
  })
  return (
    <div data-aos="fade-right"
      style={{
        width: "230px",
        fontSize:"20px",
        position:"fixed",
        left: "25px",
        marginTop: "100px",
        height: "100vh",
        padding: "12px",
      }}
    >
      <h3 data-aos="fade-right">Menu</h3>

      <ul style={{ listStyle: "none", padding: 0 }}>

        <li data-aos="fade-right" style={{ margin: "15px 0" }}>
          <Link to="/admin">Products</Link>
        </li>

        <li data-aos="fade-right" style={{ margin: "15px 0" }}>
          <Link to="/admin/orders">Orders</Link>
        </li>

      </ul>
    </div>
  );
}
export default AdminSidebar;