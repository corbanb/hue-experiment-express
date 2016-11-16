var hueService = require('../services/HueService');
var paramparser = require('../helpers/ParamParser');
var hueController = require('../controllers/HueController');

// this all extends /api/1.0/
module.exports = function (express, app) {
	var router = express.Router();
	router.use(function(request, response, next) {
		next();
	});

	router.param('color', paramparser.color);

	router.get('/hue/register/:username', hueController.register);
	router.get('/hue/createUser', hueController.createUser);
	router.get('/hue/config', hueController.config);
	router.get('/hue/state', hueController.state);
	router.get('/hue/color/:color', hueController.setColor);
	return router;
};
