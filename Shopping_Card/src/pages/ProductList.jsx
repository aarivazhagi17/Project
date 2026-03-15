import React from 'react';
import ProductCard from '../components/ProductCard';
import '../components/Product.css';

//image
import Delivery from '../assets/Items/Delivery.jpg'
import Location from "../assets/Items/Location.jpg"
import WhiteMan from "../assets/Items/WhiteMan.jpg"
import { useEffect ,useState } from 'react';


function ProductList() {
 const [product,setProducts]=useState([])
  const handleFetch = async () => {
    try{
      const response = await fetch("http://localhost:7000/products");
      const data = await response.json();
      setProducts(data);
    }
    catch(error){
      console.log(error);
    }
  }
  useEffect(() => {
    handleFetch();
  },[])
  return (
    <>
    <div style={{ padding: 20 }}>
      
      <h2 style={{textAlign:"center", fontWeight:"bold", fontSize:"29px"}}>Products</h2>
      <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {product.map((p) => (
          <ProductCard key={p._id} item={p} />
        ))}
      </div>
    </div>

     <div className='delivery'>
    <a href={Delivery} target="_blank">
      <img className='delivery_boy' src={Delivery} alt="" />
      
    </a>
    <div className='delivery_items'>
        <h2>30 Minutes Fast</h2>
        <h2>Delivery Challange</h2>
        <h5>Span Flexible working hours, weekly <br />
        payments and insurace cocerafe !</h5>
        <img className='Location' src={Location} alt="" />
    </div>
    <a href={WhiteMan} target="_blank">
      <img className='WhiteMan' src={WhiteMan} alt="" />
    </a>
    </div>
    <div className='contact'>
      <div>
        <h2>Contact : 8870032399</h2>
      </div>
      <div>
        <h2>Website : www.Shopping_Card.com</h2>
      </div>
    </div>
    </>
  );
}
export default ProductList;
