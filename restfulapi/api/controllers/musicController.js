'use strict';

var mongoose = require('mongoose'),
  Music = mongoose.model('Music');



exports.list_all_musics = function(req, res) {
  Music.find({}, function(err, music) {
    if (err)
      res.send(err);
    res.json(music);
  });
};


exports.create_a_music = function(req, res) {
  var new_music = new Music(req.body);
  new_music.save(function(err, music) {
    if (err)
      res.send(err);
    res.json(music);
  });
};

exports.read_a_music = function(req, res) {
  Music.findById(req.params.musicId, function(err, music) {
    if (err)
      res.send(err);
    res.json(music);
  });
};

exports.update_a_music = function(req, res) {
  Music.findOneAndUpdate(req.params.musicId, req.body, {new: true}, function(err, music) {
    if (err)
      res.send(err);
    res.json(music);
  });
};
// Music.remove({}).exec(function(){});
exports.delete_a_music = function(req, res) {

  Music.remove({
    _id: req.params.musicId
  }, function(err, music) {
    if (err)
      res.send(err);
    res.json({ message: 'Music successfully deleted' });
  });
};
