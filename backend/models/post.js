const { Content } = require('@angular/compiler/src/render3/r3_ast');
const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true }
});

module.exports =  mongoose.model('Post', postSchema);
