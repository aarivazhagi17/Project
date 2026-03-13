// src/components/CartItem.jsx
import React from 'react';
import { useCart } from '../contexts/CartContext';

function CartItem({ item }) {

  const { decrementItem, addItem, removeItem } = useCart();

  return (
    <div style={{ display: 'flex',  alignItems: 'center', gap: 40, marginBottom: 40, border:"1px solid", borderRadius:"5px", boxShadow:"3px 4px 5px rgb(18, 17, 17)", padding:"10px"}}>
      <div>
        <img style={{height:"100px", width:"100px"}} src={`http://localhost:7000/uploads/${item.image}`}  alt="" />
      </div> <br /> <br />
      <div style={{color:"Black", fontWeight:"bold", fontSize:"18px"}}>
        {item.name}
      </div> <br /> <br />
      <div>
        ${item.price}
      </div> <br /> <br />
      <div>
        Qty:{item.quantity}
      </div> <br /> <br />
      <button onClick={() => addItem(item)}>+</button>
      <button onClick={() => decrementItem(item.id)}>-</button>
      <button style={{backgroundColor:"red", padding:"5px", color:"white", border:"none", borderRadius:"5px"}} onClick={() => removeItem(item.id)}>Remove</button> <br /> <br />
      <div>
        <span>Subtotal:</span>
         <span style={{padding:"30px"}}>${(item.price)} </span>
      </div>
    </div>
  );
}

export default CartItem;
