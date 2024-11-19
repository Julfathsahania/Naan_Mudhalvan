const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Route to handle user registration
router.post("/register", async (req, res) => {
    try {
        const { name, email, password, role, gender, photo } = req.body;

        const newUser = new User({ name, email, password, role, gender, photo });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error registering user", error });
    }
});

module.exports = router;
