const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    gender: { type: String, required: true },
    photo: { type: String }, // URL for the photo
});

module.exports = mongoose.model("User", UserSchema);
