const Column = require('../Column')

/**
 * Create a string column.
 *
 * @param {string} name
 * @returns {Column}
 */
const string = (name) => {
	return new Column(name, 'string')
}

module.exports = string
