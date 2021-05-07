const Column = require('../Column')

/**
 * Create a datetime column.
 *
 * @param {string} name
 * @returns {Column}
 */
const dateTime = (name) => {
	return new Column(name, 'datetime')
}

module.exports = dateTime
