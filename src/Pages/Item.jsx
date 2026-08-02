import "../Styles/Menus.css";
import axios from "axios";
import { useCart } from "../Pages/CartContext";


const Item = ({ id, image, title, price, description }) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({ id, image, title, price, description });
  };
  

    return(
  <div className="Container">
  <img src={Image} alt={title} />
  <div className="info">
    <p className="title">{title}</p>
    <p className="Des">{description}</p>
    <p className="price">{price}</p>
    <button className="btn" onClick={handleAdd}>Add</button>

  </div>
</div>
    )
}
export default Item;