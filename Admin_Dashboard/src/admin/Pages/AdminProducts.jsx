import React, { useState, useEffect } from "react";
import "./AdminProducts.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
function AdminProducts() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [products, setProducts] = useState([]);

  //AOS Anitaion Use Effect
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);

  const handleFetch = async () => {
    try {
      const response = await fetch("http://localhost:7000/products");
      const data = await response.json();
      setProducts(data);
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleFetch();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price);
      formData.append("image", image);

      const response = await fetch("http://localhost:7000/products", {
        method: "POST",
        body: formData,

      });

      const data = await response.json();


      if (response.ok) {
        setProducts([...products, data]);
        alert("Product added successfully!");
        setName("");
        setPrice("");
        setImage(null);
        handleFetch();
      } else {
        alert("Please Add the Product");
      }

    }
    catch (error) {
      console.log(error);
    }
    handleFetch();
  }

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:7000/products/${id}`, {
        method: "DELETE",
      });
      alert("Product deleted successfully!");
      handleFetch();
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="admin-container">
      <h1 className="admin-heading"
        data-aos="fade-down">💁‍♀️  Products</h1>

      <form className="product-form" onSubmit={handleAdd} data-aos="zoom-in">
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Product Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button type="submit">Add Product</button>
      </form>

      <div className="product-grid">

        {products.map((product) => (
          <div key={product._id} className="product-card" data-aos="fade-up">

            <img src={`http://localhost:7000/uploads/${product.image}`} alt="" />
            <h3>{product.name}</h3>
            <p>₹ {product.price}</p>

            <button
              className="delete-btn"
              onClick={() => handleDelete(product._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminProducts;