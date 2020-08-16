const createMap = require('./create-map')

const interfaces = createMap()

module.exports = function mapApi(name) {
	return interfaces[name]
}
