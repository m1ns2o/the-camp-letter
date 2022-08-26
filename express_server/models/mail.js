const mongoose = require("mongoose");

// Define Schemes
const mailSchema = new mongoose.Schema(
	{
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
	},
	{
		timestamps: true,
	}
);
mailSchema.statics.create = function (payload) {
    // this === Model
    const mail = new this(payload);
    // return Promise
    return mail.save();
  };
  
  // Find All
  mailSchema.statics.findAll = function () {
    // return promise
    // V4부터 exec() 필요없음
    return this.find({});
  };
  
  // Find One by mailid
  mailSchema.statics.findOneByMailid = function (mailid) {
    return this.findOne({ mailid });
  };
  
  // Update by mailid
  mailSchema.statics.updateByMailid = function (mailid, payload) {
    // { new: true }: return the modified document rather than the original. defaults to false
    return this.findOneAndUpdate({ mailid }, payload, { new: true });
  };
  
  // Delete by mailid
  mailSchema.statics.deleteByMailid = function (mailid) {
    return this.remove({ mailid });
  };

// Create Model & Export
module.exports = mongoose.model("Mail", mailSchema);
