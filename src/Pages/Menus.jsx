import { useState } from "react";
import Item from "./Item";
import "../Styles/Menus.css";
<<<<<<< HEAD
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
//import { useCart } from "../Pages/CartContext";
=======

>>>>>>> 8f68285d87355d1212c982dd71a4e463e021d5ab
import { useInRouterContext, useLocation } from "react-router-dom";

  

<<<<<<< HEAD
const API_URL = "http://localhost:8080";
=======
>>>>>>> 8f68285d87355d1212c982dd71a4e463e021d5ab
const categories = ["All", "Dishes", "Desserts", "Beverages", "Mezze"];


 
const Menus = () => {
<<<<<<< HEAD
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
     
=======
  const location = useLocation();
  const name = location.state?.name || JSON.parse(localStorage.getItem("users"))?.name || "Guest";
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="menus-page">
      <h1>Welcome, {name}</h1>
>>>>>>> 8f68285d87355d1212c982dd71a4e463e021d5ab
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
<<<<<<< HEAD
        {loading ? (
          <p>Loading menu...</p>
        ) : (
          menu.map((item) => (
            <Item
              key={item.id}
              image={item.image}
              title={item.title}
              price={`${item.price}$`}
              description={item.description}
            />
          ))
        )}
=======
        <Item Image={Img} title="First Dish" price="20$" description="very delicious meal"></Item>

        <Item Image={Second} title="Second Dish" price="25$" description="Comes with fries and"></Item>


>>>>>>> 8f68285d87355d1212c982dd71a4e463e021d5ab
        
      </div>
      
    </div>
  );
}

export default Menus;