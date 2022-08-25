const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connect = require('./schemas')
// const dotenv = require("dotenv");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/write", (req, res) => {
	console.log("data input");
	console.log(req.body);
	console.log(req.body.name);
	res.send("receive");
});

app.listen(8000, () => {
	console.log("run server");
});
