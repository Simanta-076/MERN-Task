const router = require("express").Router();
const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const Joi = require("joi");


router.post("/", async (req, res) => {
    try {
        // Validate input
        const { error } = validateResetPassword(req.body);
        if (error) {
            return res.status(400).send({ message: error.details[0].message });
        }

        const { email, password, newPassword } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }

        // Validate current password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).send({ message: "Invalid current password" });
        }

        // Hash the new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        // Update user's password
        user.password = hashedPassword;
        await user.save();

        res.status(200).send({ message: "Password updated successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

// Validation function for reset password request
const validateResetPassword = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().required().label("Current Password"),
        nnewPassword: Joi.string().min(6).required().label("New Password")
        
    });
    return schema.validate(data);
};

module.exports = router;
