import "../Styles/Menus.css";
import axios from "axios";
<<<<<<< HEAD
import { useCart } from "../Pages/CartContext";


const Item = ({ id, image, title, price, description }) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({ id, image, title, price, description });
  };
  

=======

const Item = ({Image, title, price, description}) => {
  


>>>>>>> 8f68285d87355d1212c982dd71a4e463e021d5ab
    return(
  <div className="Container">
  <img src={Image} alt={title} />
  <div className="info">
    <p className="title">{title}</p>
    <p className="Des">{description}</p>
    <p className="price">{price}</p>
<<<<<<< HEAD
    <button className="btn" onClick={handleAdd}>Add</button>

=======
    
        <button className="btn"  >Add</button>

    
>>>>>>> 8f68285d87355d1212c982dd71a4e463e021d5ab
  </div>
</div>
    )
}
export default Item;