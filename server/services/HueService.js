var hue = require('node-hue-api');
var HueApi = require("node-hue-api").HueApi;
var timeout = 2 * 1000; // 2 seconds

class HueService {
	constructor() {
		const api = this;
		hue.nupnpSearch(timeout).then(function(bridge){
			console.log('bridge:', bridge);
			api.hostname = bridge[0].ipaddress;
			api.client = new HueApi(bridge[0].ipaddress, bridge[0].id);
		}).catch(function(err){
			console.error('err', err);
			throw new Error('No hue api created');
		});
	}
	register(username) {
		const api = this;
		return new Promise(function(resolve, reject) {
			api.client.registerUser(api.hostname, username).then(function(user) {
				console.log('user:', user);
				return resolve(user);
			}).catch(function(err) {
				console.error('err', err);
				return reject(err);
			});
		});
	}
	createUser() {
		const api = this;
		return new Promise(function(resolve, reject) {
			api.client.createUser(api.hostname).then(function(user) {
				console.log('user:', user);
				return resolve(user);
			}).catch(function(err) {
				console.error('err', err);
				return reject(err);
			});
		});
	}
	config() {
		const api = this;
		return new Promise(function(resolve, reject) {
			api.client.getConfig().then(function(config) {
				console.log('config:', config);
				return resolve(config);
			}).catch(function(err) {
				console.error('err', err);
				return reject(err);
			});
		});
	}
	fullState() {
		const api = this;
		return new Promise(function(resolve, reject) {
			api.client.fullState().then(function(config) {
				console.log('config:', config);
				return resolve(config);
			}).catch(function(err) {
				console.error('err', err);
				return reject(err);
			});
		});
	}
}

module.exports = new HueService();
