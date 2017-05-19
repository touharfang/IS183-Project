'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MusicSchema = new Schema({
  music: {
    type: String,
  },
  artist: {
    type: String,
  },
  genre: {
    type: String,
  },
  album: {
    type: String,
  },
  year: {
    type: String,
  },
  price: {
    type: String,
  },
});


module.exports = mongoose.model('Music', MusicSchema);