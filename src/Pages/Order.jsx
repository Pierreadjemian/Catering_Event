import "../Styles/Order.css";
import { useCart } from "./CartContext";

const Item = ({ id, image, title, price, description }) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({ id, image, title, price, description });
  };

  return (
    <div className="Container">
      <img src={image} alt={title} />
      <div className="info">
        <p className="title">{title}</p>
        <p className="Des">{description}</p>
        <p className="price">{price}</p>
        <button className="btn" onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
};

export default Item;