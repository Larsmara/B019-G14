var mongoose = require("mongoose");

var ProjectSelectSchema = new mongoose.Schema({
    title: String,
    image: String,
    text: String,
    createdAt: String,
    author: String
});

module.exports = mongoose.model("Project_select", ProjectSelectSchema);