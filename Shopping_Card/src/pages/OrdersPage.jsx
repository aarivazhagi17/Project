import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./OrdersPage.css";
function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {

    axios.get("http://localhost:7000/orders")
      .then(res => setOrders(res.data))
      .catch(err => console.log(err));

  }, []);

  return (
   <div className="orders-container">
  <h2>My Orders</h2>

  {orders.length === 0 ? (
    <p>No orders yet</p>
  ) : 
  orders.map((order,index)=>(
    
<div className="order-card" key={order._id}>

<h4 className="order-title">Order {index+1}</h4>

<p className="order-date">
Date: {new Date(order.createdAt).toLocaleString()}
</p>

{order.items?.map((item,i)=>(
<div className="order-item" key={i}>

<img className="order-image" src={item.image} alt={item.name}/>

<p className="order-name">{item.name} - ${item.price}</p>

</div>
))}

<strong className="order-total">Total: ${order.total}</strong>

<span className={`status ${order.status}`}>
{order.status}
</span>

</div>
))}
      
</div>
  );
}
export default OrdersPage;