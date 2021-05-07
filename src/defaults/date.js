const Column = require('../Column')

/**
 * Create a date column.
 *
 * @param {string} name
 * @returns {Column}
 */
const date = (name) => {
	return new Column(name, 'date')
}

module.exports = date
