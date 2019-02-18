var mongoose = require("mongoose");

var ProjectSchema = new mongoose.Schema({
    title: String,
    image: String,
    text: String,
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