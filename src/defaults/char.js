const Column = require('../Column')

/**
 * Create a char column.
 *
 * @param {string} name
 * @returns {Column}
 */
const char = (name) => {
	return new Column(name, 'char')
}

module.exports = char
