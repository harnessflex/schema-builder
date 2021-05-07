const Column = require('../Column')

/**
 * Create a integer column.
 *
 * @param {string} name
 * @returns {Column}
 */
const integer = (name) => {
	return new Column(name, 'int')
}

module.exports = integer
