// File ./models/somemodel.js

//require mongoonse
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schema and model definition
var storySchema = Schema({
  author  : {type: Schema.Types.ObjectId, ref: 'Author'},
  title   : String
})

//Model export
module.exports = mongoose.model('Story', storySchema);
