const express = require("express");
const bodyParser = require("body-parser");

const productsRoutes = require("./Routes/Products-routes");
const usersRouters = require("./Routes/Users-routes");
const HttpError = require("./Models/http-errors");

const app = express();

app.use(bodyParser.json());

app.use("/", productsRoutes);
app.use("/korisnici", usersRouters)

app.use((req, res, next) => {
  const error = new HttpError("Nismo mogli pronaći željenu stranicu", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

app.listen(5000);
