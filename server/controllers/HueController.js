var hue = require('../services/HueService');

module.exports = {
	register (request, response, next) {
		var username = request.params.username;
		hue.register(username).then(function(user) {
			response.json(user);
		}).catch(function(err){
			response.json(err);
		});
	},
	createUser (request, response, next) {
		hue.createUser().then(function(user) {
			response.json(user);
		}).catch(function(err){
			response.json(err);
		});
	},
	config (request, response, next) {
		hue.config().then(function(config) {
			response.json(config);
		}).catch(function(err){
			response.json(err);
		});
	},
	state (request, response, next) {
		hue.fullState().then(function(config) {
			response.json(config);
		}).catch(function(err){
			response.json(err);
		});
	},
	setColor (request, response, next) {
		response.json({ message: 'Set color to: ' + request.params.color });
	}
};
