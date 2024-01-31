const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    Title: String,
    Content: String,
    dateCreated: {
        type: Date,
        default: Date.now
    }
});


const posts = mongoose.model('posts', postSchema);
module.exports = posts;