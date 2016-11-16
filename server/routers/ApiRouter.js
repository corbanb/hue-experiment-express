var paramparser = require('../helpers/ParamParser');
var hueApi = require('../controllers/HueController');

// this all extends /api/1.0/
module.exports = function (express, app) {
	var router = express.Router();
	router.param('color', paramparser.color);

	router.get('/color/:color', hueApi.setColor);
	return router;
};
