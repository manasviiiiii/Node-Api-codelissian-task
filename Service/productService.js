const { Error } = require("mongoose");
const Product = require("../database/model/productModel");
const { formatMongoData } = require("../helper/dbhelper");
const { error } = require("@hapi/joi/lib/types/alternatives");
const mongoose = require("mongoose");
module.exports.createProduct = async (serviceData) => {
  try {
    let product = new Product({ ...serviceData });
    let result = await product.save();
    return formatMongoData(result);
  } catch (error) {
    console.log(`Something went wrong`, error);
    throw new Error(error);
  }
};
module.exports.getAllProducts = async (serviceData) => {
  try {
    let products = await Product.find({});

    return formatMongoData(products);
  } catch (error) {
    console.log(`Something went wrong`, error);
    throw new Error(error);
  }
};
module.exports.getProductById = async ({ id }) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Invalid Id");
    }
    let product = await Product.findById(id);
    if (!product) {
      throw new Error("Product Not Found");
    }
    return formatMongoData(product);
  } catch (error) {
    console.log(`Something went wrong`, error);
    throw new Error(error);
  }
};
module.exports.updateProduct = async ({ id, updateInfo }) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Invalid Id");
    }
    let product = await Product.findOneAndUpdate(
      {
        _id: id,
      },
      updateInfo,
      { new: true }
    );
    if (!product) {
      throw new Error("Product Not Found");
    }
    return formatMongoData(product);
  } catch (error) {
    console.log(`Something went wrong`, error);
    throw new Error(error);
  }
};
module.exports.deleteProduct = async ({ id }) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Invalid Id");
    }
    let product = await Product.findByIdAndDelete(id);
    if (!product) {
      throw new Error("Product Not Found");
    }
    return formatMongoData(product);
  } catch (error) {
    console.log(`Something went wrong`, error);
    throw new Error(error);
  }
};
