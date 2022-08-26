require("dotenv").config();
// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// Static File Service
app.use(express.static("public"));
// Body-parser
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Node의 native Promise 사용
// mongoose.Promise = global.Promise;

// Connect to MongoDB
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log("Successfully connected to mongodb"))
	.catch((e) => console.error(e));

// ROUTERS
app.use("/", require("./routes/todos"));

app.listen(8000, () => {
	console.log('run server')
});
