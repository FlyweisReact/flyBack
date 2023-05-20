/** @format */

const express = require("express");
const paymentRouter = express.Router();

const { addContactData } = require("../controller/controller");

paymentRouter.post("/", addContactData);

module.exports = paymentRouter;
