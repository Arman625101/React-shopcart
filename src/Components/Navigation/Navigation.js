import { NavLink } from "react-router-dom";
import "./Navigation.scss";
import { useAuth } from "../../context/AuthContext";

const Navigation = () => {
  const { currentUser } = useAuth();
  return (
    <nav>
      <div className="main-width">
        <NavLink to="/products">All Products</NavLink>
        <NavLink to="/myproducts">My Products</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
        {(currentUser && <NavLink to="/profile">My Profile</NavLink>) || (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
