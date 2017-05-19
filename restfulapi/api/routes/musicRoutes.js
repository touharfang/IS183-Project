'use strict';

module.exports = function(app) {
	var music = require('../controllers/musicController');

	// musicList Routes
	app.route('/music')
		.get(music.list_all_musics)
		.post(music.create_a_music);

	app.route('/music/:musicid')
		.get(music.read_a_music)
		.put(music.update_a_music)
		.delete(music.delete_a_music);
};
