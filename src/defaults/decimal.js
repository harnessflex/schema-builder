const Column = require('../Column')

/**
 * Create a decimal column.
 *
 * @param {string} name
 * @returns {Column}
 */
const decimal = (name) => {
	return new Column(name, 'decimal')
}

module.exports = decimal
