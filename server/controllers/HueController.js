module.exports = {
	setColor: function (request, response, next) {
		response.json({ message: 'Set color to: ' + request.params.color });
	}
};
