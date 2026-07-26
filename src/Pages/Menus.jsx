import { useState } from "react";
import Img from "../Images/x.jpeg";
import Second from "../Images/Y.jpeg";
import Item from "./Item";
import "../Styles/Menus.css";
 
const categories = ["All", "Dishes", "Desserts", "Beverages", "Mezze"];
 
const Menus = () => {
  const [activeCategory, setActiveCategory] = useState("All");
 
  return (
    <div className="menus-page">
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
        <Item Image={Img} title="First Dish" price="20$"></Item>

        <Item Image={Second} title="Swcond Dish" price="25$"></Item>


        
      </div>
    </div>
  );
};
 
export default Menus;