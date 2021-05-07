const Column = require('../Column')

/**
 * Create a boolean column.
 *
 * @param {string} name
 * @returns {Column}
 */
const boolean = (name) => {
	return new Column(name, 'boolean')
}

module.exports = boolean
