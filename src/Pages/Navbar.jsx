import { Link, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import "../Styles/Navbar.css";
import logo from "../Images/x.jpeg"; // adjust path/filename to your actual logo

const Navbar = () => {
  const { cart, setIsCartOpen, clearCart } = useCart();
  const navigate = useNavigate();

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const isLoggedIn = !!localStorage.getItem("users");

  const handleLogout = () => {
    localStorage.removeItem("users");
    clearCart();
    navigate("/Login");
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/menus">Menus</Link>
      </div>

      <div className="logo">
        <img src={logo} alt="Diafa" />
      </div>

      <div className="nav-right">
        <Link to="/things-to-know">Things to Know</Link>
        <Link to="/contact">Contact</Link>
        {!isLoggedIn && <Link to="/Login">Login</Link>}

        <button className="cart-icon-btn" onClick={() => setIsCartOpen(true)}>
          🛒
          {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
        </button>

        {isLoggedIn && (
          <button onClick={handleLogout}>Logout</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;