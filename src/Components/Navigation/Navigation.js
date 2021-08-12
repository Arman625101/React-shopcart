import { NavLink } from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav>
      <div className="main-width">
        <NavLink to="/products">All Products</NavLink>
        <NavLink to="/myproducts">My Products</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
