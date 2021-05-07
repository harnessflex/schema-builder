const Column = require('../Column')

/**
 * Create a longtext column.
 *
 * @param {string} name
 * @returns {Column}
 */
const longText = (name) => {
	return new Column(name, 'text').length(4294967295)
}

module.exports = longText
