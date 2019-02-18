var mongoose = require("mongoose");

var ProjectSchema = new mongoose.Schema({
    title: {type: String, required: true},
    image: String,
    text: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String,
        name: String
    }
});

module.exports = mongoose.model("Project", ProjectSchema);