import "../Styles/Menus.css";
import axios from "axios";

const Item = ({Image, title, price, description}) => {
  


    return(
  <div className="Container">
  <img src={Image} alt={title} />
  <div className="info">
    <p className="title">{title}</p>
    <p className="Des">{description}</p>
    <p className="price">{price}</p>
    
        <button className="btn"  >Add</button>

    
  </div>
</div>
    )
}
export default Item;