import React, { useState, useEffect } from "react";
import "./AdminOrders.css";
import axios from "axios";

function AdminOrders() {
  const [orders, setOrders] = useState([]);

   useEffect(() => {
    axios.get("http://localhost:7000/orders")
      .then(res => {
        setOrders(res.data);
      });
  }, []);

  return (
    <div className="admin-orders">
      <h2>All Orders</h2>

      <div className="orders-grid">
        {orders.map(order => (
          <div key={order._id} className="order-card">
            <h3>{order.name}</h3>
            <p>Name: {order.name}</p>
            <p>Phone:{order.phone}</p>
            <p>Address: {order.address}</p>
            <p>Date: {new Date(order.createdAt).toLocaleString()}</p>

            {/* PRoduct LiSt*/}
            <div className="product-list">
              <h4>Products : </h4>

                {order.items?.map((item,i)=>(
                <div key={i} className="product-item">

                  <img src={item.image} alt={item.name} width="40"/>

                  <span>{item.name}</span>

                  <span>${item.price}</span>

                </div>
              ))}
            </div>
            <button>{order.status}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminOrders;