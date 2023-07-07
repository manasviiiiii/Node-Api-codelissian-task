const { response } = require("express");
const productService = require("../Service/productService");

module.exports.createProduct = async (req, res) => {
  let response = {};
  try {
    const responsefromService = await productService.createProduct(req.body);
    response.status = 200;
    response.message = "Product created successfully";
    response.body = responsefromService;
  } catch (error) {
    console.log(`Something Went Wrong`, error);
    response.status = 400;
    response.message = error.message;
    response.body = {};
  }
  return res.status(response.status).send(response);
};
module.exports.getAllProducts = async (req, res) => {
  let response = {};
  try {
    const responsefromService = await productService.getAllProducts();
    response.status = 200;
    response.message = "Product fetched successfully";
    response.body = responsefromService;
  } catch (error) {
    console.log(`Something Went Wrong`, error);
    response.status = 400;
    response.message = error.message;
    response.body = {};
  }
  return res.status(response.status).send(response);
};
module.exports.getProductById = async (req, res) => {
  let response = {};
  try {
    const responsefromService = await productService.getProductById(req.params);
    response.status = 200;
    response.message = "Product fetched successfully";
    response.body = responsefromService;
  } catch (error) {
    console.log(`Something Went Wrong`, error);
    response.status = 400;
    response.message = error.message;
    response.body = {};
  }
  return res.status(response.status).send(response);
};
module.exports.updateProduct = async (req, res) => {
  let response = {};
  try {
    const responsefromService = await productService.updateProduct({
      id: req.params.id,
      updateInfo: req.body,
    });
    response.status = 200;
    response.message = "Product updated successfully";
    response.body = responsefromService;
  } catch (error) {
    console.log(`Something Went Wrong`, error);
    response.status = 400;
    response.message = error.message;
    response.body = {};
  }
  return res.status(response.status).send(response);
};
module.exports.deleteProduct = async (req, res) => {
  let response = {};
  try {
    const responsefromService = await productService.deleteProduct(req.params);
    response.status = 200;
    response.message = "Product deleted successfully";
    response.body = responsefromService;
  } catch (error) {
    console.log(`Something Went Wrong`, error);
    response.status = 400;
    response.message = error.message;
    response.body = {};
  }
  return res.status(response.status).send(response);
};
