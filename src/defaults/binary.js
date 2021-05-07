const Column = require('../Column')

/**
 * Create a binary column.
 *
 * @param {string} name
 * @returns {Column}
 */
const binary = (name) => {
	return new Column(name, 'binary')
}

module.exports = binary
