const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const multer = require("multer");
require("dotenv").config();

// Schemas
const Admin = require("./module/adminSchema.js");
const User = require("./module/UserSchema.js");
const Order = require("./module/OrderSchema.js");
const Product = require("./module/productSchema.js");

const app = express();

app.use(express.json());
app.use(cors());

/* ===============================
   MongoDB Connection
================================*/
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

/* ===============================
   Create uploads folder if missing
================================*/
const uploadDir = "uploads";

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

/* ===============================
   Static Folder for Images
================================*/
app.use("/uploads", express.static("uploads"));

/* ===============================
   Multer Storage Setup
================================*/
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

/* ===============================
   JWT Token Middleware
================================*/
function verifyToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Access Denied" });
  }

  jwt.verify(token, "secretKey", (err, decoded) => {
    if (err) return res.status(401).json({ message: "Invalid Token" });

    req.user = decoded;
    next();
  });
}

/* ===============================
   ADMIN REGISTER
================================*/
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    const admin = await Admin.create({ username, password });

    res.status(201).json(admin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

/* ===============================
   ADMIN LOGIN
================================*/
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await Admin.findOne({ username });

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    if (password !== user.password) {
      return res.status(400).json({ error: "Invalid password" });
    }

    const token = jwt.sign({ username }, "secretKey", { expiresIn: "1h" });

    res.status(200).json({ token });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/* ===============================
   PROTECTED ADMIN DATA
================================*/
app.get("/admin-data", verifyToken, (req, res) => {
  res.json({ message: "Protected Admin Data" });
});

/* ===============================
   USER REGISTER
================================*/
app.post("/user-register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.create({ name, email, password });

    res.status(201).json(user);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

/* ===============================
   ORDER APIs
================================*/
app.post("/orders", async (req, res) => {
  try {
     const order = new Order({
       name: req.body.name,
       phone: req.body.phone,
       address: req.body.address,
       date: req.body.date,
       status:"pending"
     });
     const saveOrder =await order.save();
     res.json(saveOrder);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });

    res.json(orders);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/* ===============================
   PRODUCT APIs
================================*/

/* ADD PRODUCT */
app.post("/products", upload.single("image"), async (req, res) => {
  try {
    const { name, price } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image upload required" });
    }

    const image = req.file.filename;

    const newProduct = new Product({
      name,
      price,
      image,
    });

    await newProduct.save();

    res.json({ message: "Product added successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

/* GET PRODUCTS */
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/* DELETE PRODUCT */
app.delete("/products/:id", async (req, res) => {
  try {
    const productId = req.params.id;

    await Product.findByIdAndDelete(productId);

    res.json({ message: "Product deleted successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/* ===============================
   SERVER START
================================*/
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
});