import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose, { Schema } from "mongoose";
const app = express();
app.use(cors());
app.use(express.json());

const ProductSchema = new Schema({
  img: String,
  title:String
});

const ProductModel = mongoose.model("myproduct", ProductSchema);

app.get("/products", async (req, res) => {
  const products = await ProductModel.find({});
  res.send(products);
});

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const products = await ProductModel.findById(id);
  res.send(products);
});

app.post("/products", async (req, res) => {
  const { img,title } = req.body;
  const newProduct = new ProductModel({ img,title });
  await newProduct.save();
  res.send("Got a POST request");
});

app.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  const { img,title } = req.body;
  const product = await ProductModel.findByIdAndUpdate(id, { img,title });
  res.send("Got a PUT request at /product");
});

app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await ProductModel.findByIdAndDelete(id);
  res.send("Got a DELETE request at /product");
});

mongoose
  .connect(process.env.KEY)
  .then(() => console.log("Connected!"))
  .catch(() => console.log("Not Connected!"));

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
