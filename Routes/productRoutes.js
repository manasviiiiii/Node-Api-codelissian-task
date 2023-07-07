const express = require("express");
const router = express.Router();

const productController = require("../controller/productController");
const bodyParser = require("body-parser");
const joiSchemaValidation = require("../middleware/joiSchemavalidation");
const productSchema = require("../apiSchema/productSchema");
const tokenValidation = require("../middleware/tokenvalidation");
router.post(
  "/",
  bodyParser.json(),
  tokenValidation.validateToken,
  joiSchemaValidation.validateBody(productSchema.createProductSchema),
  productController.createProduct
);
router.get(
  "/",
  tokenValidation.validateToken,
  productController.getAllProducts
);
router.get(
  "/:id",
  tokenValidation.validateToken,
  productController.getProductById
);
router.put(
  "/:id",
  bodyParser.json(),
  tokenValidation.validateToken,
  joiSchemaValidation.validateBody(productSchema.updateProductSchema),
  productController.updateProduct
);
router.delete(
  "/:id",
  tokenValidation.validateToken,
  productController.deleteProduct
);
module.exports = router;
