import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Nav.css";

const Navbar = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    });
  }, []);

  return (
    <nav className="navbar" data-aos="fade-down">
      <h1 className="logo" data-aos="fade-right">Web</h1>

      <ul className="nav-links">
        <li data-aos="fade-down" data-aos-delay="100">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>

        <li data-aos="fade-down" data-aos-delay="200">
          <NavLink to="/ProductList" className="nav-link">
            ProductList
          </NavLink>
        </li>

        <li data-aos="fade-down" data-aos-delay="300">
          <NavLink to="/OrdersPage" className="nav-link">
            Orders
          </NavLink>
        </li>

        <li data-aos="fade-down" data-aos-delay="400">
          <NavLink to="/Cart" className="nav-link">
            🛒
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;