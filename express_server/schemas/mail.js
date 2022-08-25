const mongoose = require("mongoose");

const { Schema } = mongoose;
const mailSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	text: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now(),
	},
});

module.exports = mongoose.model("mail", mailSchema);
