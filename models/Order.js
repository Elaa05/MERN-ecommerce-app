const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  date: {
    type: String,
    reuired: true,
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  total_price: {
    type: Number,
    required: true,
  },
  livred: {
    type: Boolean,
    default: false,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

module.exports = mongoose.model("Order", orderSchema);
