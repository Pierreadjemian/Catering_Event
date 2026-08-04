import { useState } from "react";
import Item from "./Item";
import "../Styles/Menus.css";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
//import { useCart } from "../Pages/CartContext";
import { useInRouterContext, useLocation } from "react-router-dom";

  

const API_URL = "http://localhost:8080";
const categories = ["All", "Dishes", "Desserts", "Beverages", "Mezze"];


 
const Menus = () => {
 //const { cart } = useCart();   
  const [activeCategory, setActiveCategory] = useState("All");
  const location = useLocation();
  const name = location.state?.name 
  || JSON.parse(localStorage.getItem("users"))?.name 
  || location.state?.email
  || "Guest";


const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchMenu = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(`${API_URL}/menu_item`);
      setMenu(res.data);
    } catch (err) {
      setError("Could not load menu items");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);
 
 return (
    <div className="menus-page">
      
      <h1>Welcome, {name}</h1>
     
      <div className="menus-categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {error && <p className="menus-error">{error}</p>}

      <div className="menus-grid">
        {loading ? (
          <p>Loading menu...</p>
        ) : (
          menu.map((item) => (
            <Item
  key={item.id}
  id={item.id}
  image={item.image}
  title={item.title}
  price={item.price}
  description={item.description}
/>
          ))
        )}
        
      </div>
      
    </div>
  );
}

export default Menus;