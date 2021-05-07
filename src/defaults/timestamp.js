const Column = require('../Column')

/**
 * Create a timestamp column.
 *
 * @param {string} name
 * @returns {Column}
 */
const timestamp = (name) => {
	return new Column(name, 'timestamp')
}

module.exports = timestamp
