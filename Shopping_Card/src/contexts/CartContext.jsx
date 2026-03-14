// src/contexts/CartContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext(null);

// custom hook for convenience
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    // load from localStorage if available
    try {
      const stored = window.localStorage.getItem('cart_items');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  });

  // save to localStorage whenever items change
  useEffect(() => {
    try {
      window.localStorage.setItem('cart_items', JSON.stringify(items));
    } catch (e) {
      // ignore write errors
    }
  }, [items]);

  // add item or increase qty if already in cart
  const addItem = (product) => {
    setItems((prev) => {
      const idx = prev.findIndex((it) => it._id === product._id);
      if (idx >= 0) {
        // already present -> increase quantity
        const updated = [...prev];
        updated[idx] = {
          ...updated[idx],
          quantity: updated[idx].quantity + 1,
        };
        return updated;
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // decrease quantity or remove if qty becomes 0
  const decrementItem = (productId) => {
    setItems((prev) => {
      const idx = prev.findIndex((it) => it._id === productId);
      if (idx < 0) return prev;
      const updated = [...prev];
      const currentQty = updated[idx].quantity;
      if (currentQty <= 1) {
        // remove item
        updated.splice(idx, 1);
      } else {
        updated[idx] = { ...updated[idx], quantity: currentQty - 1 };
      }
      return updated;
    });
  };

  // remove completely (optional)
  const removeItem = (productId) => {
    setItems((prev) => prev.filter((it) => it._id !== productId));
  };

  // compute total price
  const total = items.reduce(
    (sum, it) => sum + it.price * it.quantity,
    0
  );

  //clearcart

  const clearCart = () => {
  setItems([]);
};

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        decrementItem,
        removeItem,
        clearCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
