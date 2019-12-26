// File ./models/somemodel.js

//require mongoonse
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schema and model definition
var authorSchema = Schema({
  name    : String,
  stories : [{ type: Schema.Types.ObjectId, ref: 'Story'}]
});

//Model export
module.exports = mongoose.model('Author', authorSchema);
