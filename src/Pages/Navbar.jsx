import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../Images/x.jpeg"; // renamed from the original spaced filename — rename the actual file to match
import Login from "../Pages/Login";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo">
          <img src={logo} alt="Diafa Catering" />
          {/* Or use text instead of an image logo:
          <h1>DIAFA</h1> */}
        </div>
      </div>

      
      <div className="nav-right">
        <Link to="/">HOME</Link>
        <Link to="/menus">MENU</Link>
        <Link to="/about">ABOUT US</Link>
        <Link to="/things-to-know">THINGS TO KNOW</Link>
        <Link to="/contact">GET IN TOUCH</Link>
 
        <Link to="/Login"><button>Login/Signup</button></Link>
      </div>
    </nav>
  );
};

export default Navbar;