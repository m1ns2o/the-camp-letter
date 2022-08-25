const mongoose = require("mongoose");

const db_url = "mongodb://minseo:minseo0128@localhost:27017//admin";

const connect = () => {
	if (process.env.NODE_ENV !== "production") {
		mongoose.set("debug", true);
	}

	mongoose.connect(
		db_url,
		{
			dbName: "the-camp-mail",
			useNewUrlParser: true,
			useCreateIndex: true,
		},
		(error) => {
			if (error) {
				console.log("db link error", error);
			} else {
				console.log("db link success");
			}
		}
	);
};

mongoose.connection.on("error", (error) => {
	console.error("db link event listner error", error);
});

mongoose.connection.on("disconnected", () => {
	console.error("db link disconnected retry");
	connect();
});
