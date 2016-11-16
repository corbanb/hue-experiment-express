exports.color = function(req, res, next, val) {
	console.log('color middleware', val);
	return next();
};
