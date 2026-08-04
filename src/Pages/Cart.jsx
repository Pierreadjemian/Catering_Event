import { useCart } from "./CartContext";
import "../Styles/Admin.css";

const Cart = () => {
  const { cart, increment, decrement, removeFromCart, total, checkout } = useCart();
  

  return (
    <div className="admin-page">
      <h1>Your Cart</h1>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.length === 0 ? (
            <tr><td colSpan={6}>Your cart is empty</td></tr>
          ) : (
            cart.map((item) => (
              <tr key={item.id}>
                <td>{item.image && <img src={item.image} alt={item.title} width="60" />}</td>
                <td>{item.title}</td>
                <td>{item.price}$</td>
                <td className="admin-actions">
                  <button onClick={() => decrement(item.id)}>-</button>
                  <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                  <button onClick={() => increment(item.id)}>+</button>
                </td>
                <td>{(item.price * item.quantity).toFixed(2)}$</td>
                <td className="admin-actions">
                  <button className="admin-delete-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {cart.length > 0 && (
        <>
          <h2 style={{ marginTop: "20px" }}>Total: {total.toFixed(2)}$</h2>
<button className="checkout-btn" onClick={checkout}>
  Checkout
</button>
        </>
      )}
    
    </div>
  );
};

export default Cart;