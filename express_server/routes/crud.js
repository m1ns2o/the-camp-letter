const router = require("express").Router();
const Mail = require("../models/mail");

// Find All
router.get("/", (req, res) => {
	Mail.findAll()
		.then((mails) => {
			if (!mails.length) return res.status(404).send({ err: "Mail not found" });
			res.send(`find successfully: ${mails}`);
		})
		.catch((err) => res.status(500).send(err));
});

// Find One by mailid
router.get("/mailid/:mailid", (req, res) => {
	Mail.findOneByMailid(req.params.mailid)
		.then((mail) => {
			if (!mail) return res.status(404).send({ err: "Mail not found" });
			res.send(`findOne successfully: ${mail}`);
		})
		.catch((err) => res.status(500).send(err));
});

// Create new mail document
router.post("/", (req, res) => {
	console.log(req.body);
	console.log(req.body.name);
	console.log(req.body.title);
	console.log(req.body.text);
	Mail.create(req.body)
		.then((mail) => res.send(mail))
		.catch((err) => res.status(500).send(err));
});

// Update by mailid
router.put("/mailid/:mailid", (req, res) => {
	Mail.updateByMailid(req.params.mailid, req.body)
		.then((mail) => res.send(mail))
		.catch((err) => res.status(500).send(err));
});

// Delete by mailid
router.delete("/mailid/:mailid", (req, res) => {
	Mail.deleteByMailid(req.params.mailid)
		.then(() => res.sendStatus(200))
		.catch((err) => res.status(500).send(err));
});

module.exports = router;
