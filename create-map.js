module.exports = function createMap() {
	const interfaces = {}

	const apis = require.context('./', false, /\w+\.js$/)

	apis.keys().forEach(key => {
		interfaces[key.match(/^\.\/(\w+)\.js$/)[1]] = apis(key)
	})

	return interfaces
}
