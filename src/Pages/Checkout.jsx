import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import "../Styles/Checkout.css";

const Checkout = () => {
  const { clearCart } = useCart();
  const navigate = useNavigate();

  const handleBackHome = () => {
    clearCart();
    navigate("/");
  };

  return (
    <div className="checkout-page">
      <h1>Thank you for your order!</h1>
      <p>One of our agents will contact you within two days.</p>
      <button className="btn" onClick={handleBackHome}>
        Back to Home
      </button>
    </div>
  );
};

export default Checkout;