import { NavLink } from "react-router-dom";
import "./Nav.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Web</h1>

      <ul className="nav-links" id="">
        <li>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/ProductList" className="nav-link">
            ProductList
          </NavLink>
        </li>
        <li>
          <NavLink to="/OrdersPage" className="nav-link" >Orders</NavLink>
        </li>
        <li>
          <NavLink to="/Cart" className="nav-link">
          🛒
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
