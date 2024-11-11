const express = require("express");
const route = express.Router();
const {
  getIndex,
  getIndexId,
  postIndex,
  deleteIndex,
  updateIndex,
  register,
  login
} = require("../controller/controller");
const upload = require('../middleware/middleware')



route.get("/", getIndex);
route.get("/workout/:id", getIndexId);
route.post("/post", upload.single('file'), postIndex);
route.delete("/delete/:id", deleteIndex);
route.put("/update/:id", updateIndex);
route.post("/register", register)
route.post("/login", login)

module.exports = route;
