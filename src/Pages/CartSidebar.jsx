import { useCart } from "../Pages/CartContext";
import { useNavigate } from "react-router-dom";
import "../Styles/Cart.css";

const CartSidebar = () => {
  const { cart, increment, decrement, removeFromCart, total, isCartOpen, setIsCartOpen } = useCart();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate("/checkout");
  };

  return (
    <div className="cart-overlay" onClick={() => setIsCartOpen(false)}>
      <div className="cart-panel" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="btn" onClick={() => setIsCartOpen(false)}>✕</button>
        </div>

        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div className="cart-row" key={item.id}>
              <img src={item.image} alt={item.title} width="50" />
              <div className="cart-row-info">
                <p>{item.title}</p>
                <p>{item.price}$</p>
              </div>
              <div className="cart-qty">
                <button className="btn" onClick={() => decrement(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button className="btn" onClick={() => increment(item.id)}>+</button>
              </div>
              <p>{(item.price * item.quantity).toFixed(2)}$</p>
              <button className="admin-delete-btn" onClick={() => removeFromCart(item.id)}>✕</button>
            </div>
          ))
        )}

        {cart.length > 0 && (
          <>
            <h2 className="cart-total">Total: {total.toFixed(2)}$</h2>
            <button className="btn checkout-btn" onClick={handleCheckout}>
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;