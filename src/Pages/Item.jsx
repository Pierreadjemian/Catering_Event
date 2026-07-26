import "../Styles/Item.css";
const Item = ({Image, title, price,}) => {
    return(
        <div className="Container">
           <img src={Image}></img>
           <br></br>
           <title>{title}</title>
           <br></br>
           <price>{price}</price>

        </div>
    )
}
export default Item;