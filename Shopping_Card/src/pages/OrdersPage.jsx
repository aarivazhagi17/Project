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


//    useEffect(() => {

//   const user = JSON.parse(localStorage.getItem("user"));

//   axios.get("http://localhost:7000/orders")
//     .then(res => {

//       const myOrders = res.data.filter(
//         order => order.userId === user?._id
//       );

//       setOrders(myOrders);

//     })
//     .catch(err => console.log(err));

// }, []);

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
{/* mistake not product show */}
{order.items.map((item) => (
  <div className="order-item" key={item._id}>
    <img
      src={`http://localhost:7000/uploads/${item.image}`}
      alt={item.name}
      className="order-image"
    />
    <div className="order-details">
      <p className="order-name">{item.name}</p>
      <p className="order-price">${item.price}</p>
    </div>
  </div>
))}
<h4>Total: ${order.total}</h4>
<button className={`status ${order.status}`}>
{order.status}
</button>

</div>
))}
      
</div>
  );
}
export default OrdersPage;