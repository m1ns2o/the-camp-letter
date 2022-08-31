const router = require("express").Router();
const { text } = require("express");
const thecamp = require("the-camp-lib");
const Mail = require("../models/mail");

const id = process.env.ID;
const password = process.env.PWD;

const myname = process.env.NAME;
const birth = process.env.BIRTH;
const enterDate = process.env.ENTERDATE;
const className = process.env.CLASSNAME;
const groupName = process.env.GROUPNAME;
const unitName = process.env.UNITNAME;

process.on("uncaughtException", function (err) {
	//예상치 못한 예외 처리
	console.log("uncaughtException 발생 : " + err);
});

async function main(name, title, text) {
	const soldier = new thecamp.Soldier(
		myname,
		birth,
		enterDate,
		className,
		groupName,
		unitName,
		thecamp.SoldierRelationship.FRIEND
	);
	console.log(soldier);
	console.log(title + "  이름 : " + name);
	console.log(text);

	const client = new thecamp.Client();

	await client.login(id, password);
	await client.addSoldier(soldier);

	const [trainee] = await client.fetchSoldiers(soldier);
	const message = new thecamp.Message(title + "이름 : " + name, text, trainee);

	await client.sendMessage(soldier, message);
}

// Find All
router.get("/mail", (req, res) => {
	Mail.findAll()
		.then((mails) => {
			if (!mails.length) return res.status(404).send({ err: "Mail not found" });
			res.send(`find successfully: ${mails}`);
		})
		.catch((err) => res.status(500).send(err));
});

// Find One by mailid
router.get("/mail/:mailid", (req, res) => {
	Mail.findOneByMailid(req.params.mailid)
		.then((mail) => {
			if (!mail) return res.status(404).send({ err: "Mail not found" });
			res.send(`findOne successfully: ${mail}`);
		})
		.catch((err) => res.status(500).send(err));
});

// Create new mail document
router.post("/mail", (req, res) => {
	Mail.create(req.body)
		.then((mail) => res.send(mail))
		.catch((err) => res.status(500).send(err));

	try {
		main(req.body.name, req.body.title, req.body.text);
	} catch (error) {
		console.log(error);
	}
});

// Update by mailid
router.put("/mail/:mailid", (req, res) => {
	Mail.updateByMailid(req.params.mailid, req.body)
		.then((mail) => res.send(mail))
		.catch((err) => res.status(500).send(err));
});

// Delete by mailid
router.delete("/mail/:mailid", (req, res) => {
	Mail.deleteByMailid(req.params.mailid)
		.then(() => res.sendStatus(200))
		.catch((err) => res.status(500).send(err));
});

module.exports = router;
