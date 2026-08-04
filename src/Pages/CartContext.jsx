import { createContext, useContext, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8080";

const CartContext = createContext();



export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === item.id);
      if (existing) {
        return prev.map((c) =>
          c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const increment = (id) => {
    setCart((prev) =>
      prev.map((c) => (c.id === id ? { ...c, quantity: c.quantity + 1 } : c))
    );
  };

  const decrement = (id) => {
    setCart((prev) =>
      prev
        .map((c) => (c.id === id ? { ...c, quantity: c.quantity - 1 } : c))
        .filter((c) => c.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((c) => c.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = cart.reduce((sum, c) => sum + Number(c.price) * c.quantity, 0);

  const checkout = async () => {
    const user = JSON.parse(localStorage.getItem("users"));

    if (!user) {
      alert("Please log in to checkout.");
      return;
    }
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    try {
      await axios.post(`${API_URL}/orders`, {
        user_id: user.id,
        total: total,
        items: cart.map((c) => ({
          menu_item_id: c.id,
          quantity: c.quantity,
        })),
      });
      clearCart();
      setIsCartOpen(false);
      alert("Order placed successfully!");
    } catch (err) {
      console.log(err);
      alert("Could not place order");
    }
  };

  return (
    <CartContext.Provider
value={{
        cart,
        addToCart,
        increment,
        decrement,
        removeFromCart,
        clearCart,
        total,
        checkout,
        isCartOpen,
        setIsCartOpen,
      }
      }
    >
      {children}
    </CartContext.Provider>
  );
  };
  export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};