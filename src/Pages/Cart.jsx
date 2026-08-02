import { useState } from "react";
import { useCart, parsePrice } from "../Pages/CartContext";
import "../Styles/Cart.css";


const Cart = () => {
  const { cartItems, removeFromCart, updateQty, clearCart, cartTotal } = useCart();
  const [checkedOut, setCheckedOut] = useState(false);

  const handleCheckout = () => setCheckedOut(true);

  if (cartItems.length === 0 && !checkedOut) {
    return (
      <div className="cart-page">
        <h1>Your Cart</h1>
        <p className="cart-empty">Your cart is empty. Go add some dishes from the Menu!</p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      <div className="cart-list">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.title}>
            <img src={item.image} alt={item.title} />

            <div className="cart-item-info">
              <p className="cart-item-title">{item.title}</p>
              <p className="cart-item-desc">{item.description}</p>
              <p className="cart-item-price">{item.price}</p>
            </div>

            <div className="cart-item-qty">
              <button onClick={() => updateQty(item.title, item.qty - 1)}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => updateQty(item.title, item.qty + 1)}>+</button>
            </div>

            <p className="cart-item-subtotal">
              ${(parsePrice(item.price) * item.qty).toFixed(2)}
            </p>

            <button
              className="cart-remove-btn"
              onClick={() => removeFromCart(item.title)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {!checkedOut ? (
        <div className="cart-footer">
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      ) : (
        <div className="checkout-summary">
          <h2>Total: ${cartTotal.toFixed(2)}</h2>
          <button
            className="confirm-btn"
            onClick={() => {
              clearCart();
              setCheckedOut(false);
            }}
          >
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;