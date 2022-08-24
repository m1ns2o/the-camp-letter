const express = require("express");
var cors = require('cors');
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
