const Column = require('../Column')

/**
 * Create a text column.
 *
 * @param {string} name
 * @returns {Column}
 */
const text = (name) => {
	return new Column(name, 'text')
}

module.exports = text
