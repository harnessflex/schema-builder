const Column = require('../Column')

/**
 * Create a time column.
 *
 * @param {string} name
 * @returns {Column}
 */
const time = (name) => {
	return new Column(name, 'time')
}

module.exports = time
