const { v4: uuidv4 } = require("uuid");
const HttpError = require("../Models/http-errors");
const { application } = require("express");
const { validationResult } = require("express-validator");

let PRODUCTS = [
  {
    id: "p1",
    name: "3D Personalizirani Toper koji je jako ljep ajsdbnausn",
    image:
      "https://deadizajn.hr/wp-content/uploads/2023/10/IMG-20231023-WA0100.jpg",
    price: "4.5€ / 34.55HRK",
  },
  {
    id: "p2",
    name: "Drvena noćna lampa",
    image:
      "https://deadizajn.hr/wp-content/uploads/2022/10/311729510_131860432974660_2734408052315084486_n-e1668118666743.jpg",
    price: "21.20€ / 150HRK",
  },
];

const allProducts = (req, res, next) => {
  res.json({ product: PRODUCTS });
};

const getProductById = (req, res, next) => {
  const productId = req.params.pid;

  const product = PRODUCTS.find((p) => {
    return p.id === productId;
  });

  if (!product) {
    return next(new HttpError("Nažalost taj proizvod ne postoji", 404));
  }

  res.json({ product });
};

const createProduct = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    const errorMessages = errors.array().map((error) => error.msg);
    throw new HttpError("Neuspijelo dodavanje porizvoda.", 422, {
      errors: errorMessages,
    });
  }

  const { name, price } = req.body; //Skraćeno od (const name = req.body.name)i ostali podatci...
  const createdProduct = {
    id: uuidv4(),
    name, //ili možemo pisati ovako name: name
    price,
  };

  PRODUCTS.push(createdProduct); //to bi treballo ić na bazu

  res.status(201).json({ product: createdProduct });
};

const updateProduct = (req, res, next) => {
  const { name, price } = req.body;
  const productId = req.params.pid;

  const updatedProduct = { ...PRODUCTS.find((p) => p.id === productId) };
  const productIndex = PRODUCTS.findIndex((p) => p.id === productId);
  updatedProduct.name = name;
  updatedProduct.price = price;

  PRODUCTS[productIndex] = updatedProduct;

  res.status(200).json({ product: updatedProduct });
};

const deliteProduct = (req, res, next) => {
  const productId = req.params.pid;
  PRODUCTS = PRODUCTS.filter((p) => p.id !== productId);
  res.status(200).json({ message: "Uspješno si obrisao proizvod!" });
};

exports.allProducts = allProducts;
exports.getProductById = getProductById;
exports.createProduct = createProduct;
exports.updateProduct = updateProduct;
exports.deliteProduct = deliteProduct;
