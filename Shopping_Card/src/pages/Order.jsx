import { useState } from "react";
import "./Order.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Order() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Order Confirmed 🎉");

  
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

const totalPrice = cartItems.reduce(
  (total,item)=> total + item.price,
  0
);

const orderData = {
  name,
  phone,
  address,
  items: cartItems,
  total: totalPrice,
  data: new Date().toLocaleString()
};  
await axios.post("http://localhost:7000/orders", orderData);
  };

  return (
    <div className="order-container">
      <form className="order-form" onSubmit={handleSubmit}>
        <h2>Delivery Details
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <input
          name="address"
          placeholder="Enter delivery address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <button type="submit" className="submit-btn">
          Confirm Order
        </button>
      </form>
    </div>
  );
};

export default Order;