const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: String,
  phone: String,
  address: String,
  date: String,

  items:[
    {
      image: String,
      name: String,
      price: Number
    }
  ],
  total: Number,
  status:{
    type: String,
    default: "pending"
  },
},
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);