var mongoose = require("mongoose");

var ProjectSelectSchema = new mongoose.Schema({
    title: String,
    image: String,
    text: String,
    createdAt: String,
    showing: {type: Boolean, default: false},
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String,
        name: String
    }
});

module.exports = mongoose.model("Project_select", ProjectSelectSchema);