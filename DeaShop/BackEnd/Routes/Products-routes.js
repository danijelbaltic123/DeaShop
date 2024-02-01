const express = require("express");
const { check } = require("express-validator");

const productControllers = require("../Controllers/Products-controller");

const router = express.Router();

router.get("/", productControllers.allProducts);

router.get("/:pid", productControllers.getProductById);

router.post(
  "/dodaj-novi-proizvod",
  [
    check("name")
      .not()
      .isEmpty()
      .withMessage("molimo vas da unestete odgovarajće ime proizvoda"),
    check("price")
      .isNumeric()
      .withMessage("Molimo vas da cijena bude numerička")
      .isFloat({ min: 0.01, max: 999999.99 })
      .withMessage("Cijena mora biti sa dvije decimala i odvojena znakom '.'"),
  ],
  productControllers.createProduct
);

router.patch("/:pid", productControllers.updateProduct);

router.delete("/:pid", productControllers.deliteProduct);

module.exports = router;
