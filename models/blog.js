const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema 
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
},{timestamps: true});

// create a model to utlize the schema
const Blog = mongoose.model('Blog', blogSchema); 
// Blog shoud be singular of the collecation name in db

// so we can access this model throught the project
module.exports = Blog;

