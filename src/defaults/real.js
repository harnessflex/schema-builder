const Column = require('../Column')

/**
 * Create a real column.
 *
 * @param {string} name
 * @returns {Column}
 */
const real = (name) => {
	return new Column(name, 'real')
}

module.exports = real
