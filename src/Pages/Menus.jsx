import { useState } from "react";
import Img from "../Images/x.jpeg";
import Second from "../Images/Y.jpeg";
import Item from "./Item";
import "../Styles/Menus.css";

import { useInRouterContext, useLocation } from "react-router-dom";

  

const categories = ["All", "Dishes", "Desserts", "Beverages", "Mezze"];
 
const Menus = () => {
  const location = useLocation();
  const name = location.state?.name || JSON.parse(localStorage.getItem("users"))?.name || "Guest";
  const [activeCategory, setActiveCategory] = useState("All");

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
 
      <div className="menus-grid">
        <Item Image={Img} title="First Dish" price="20$" description="very delicious meal"></Item>

        <Item Image={Second} title="Second Dish" price="25$" description="Comes with fries and"></Item>


        
      </div>
    </div>
  );
};
 
export default Menus;