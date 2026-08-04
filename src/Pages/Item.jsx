import "../Styles/Menus.css";
import axios from "axios";
import { useCart } from "../Pages/CartContext";
import { useNavigate } from "react-router-dom";

const Item = ({ id, image, title, price, description }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAdd = () => {
    const user = JSON.parse(localStorage.getItem("users"));

    if (!user) {
      alert("Please log in to add items to your cart.");
      navigate("/Login");
      return;
    }

    addToCart({ id, image, title, price, description });
  };

  return (
    <div className="Container">
      <img src={image} alt={title} />
      <div className="info">
        <p className="title">{title}</p>
        <p className="Des">{description}</p>
        <p className="price">{price}$</p>
        <button className="btn" onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
};

export default Item;