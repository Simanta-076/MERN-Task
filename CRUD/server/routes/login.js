const router = require("express").Router(); 
const { User } = require("../models/user"); 
const bcrypt = require("bcrypt"); 
const Joi = require("joi"); 

router.post("/", async (req, res) => {
	try {
		// Validate request body
		const { error } = validate(req.body);
		if (error) return res.status(400).send({ message: error.details[0].message });

		// Check if user exists
		const user = await User.findOne({ email: req.body.email });
		if (!user) return res.status(401).send({ message: "Invalid Email or Password" });

		// Validate password
		const validPassword = await bcrypt.compare(req.body.password, user.password);
		if (!validPassword) return res.status(401).send({ message: "Invalid Email or Password" });

		// Generate auth token
		const token = user.generateAuthToken();
		res.status(200).send({ data: token, message: "Logged in successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

// validate data
const validate = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = router; 
