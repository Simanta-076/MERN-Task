const router = require("express").Router();
const { User } = require("../models/user");

router.get("/", async (req, res) => {
  try {
    const users = await User.find({}, { password: 0, resetPasswordToken: 0, resetPasswordExpires: 0 });
    res.json(users);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
