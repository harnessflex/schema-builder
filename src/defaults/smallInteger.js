const Column = require('../Column')

/**
 * Create a small integer column.
 *
 * @param {string} name
 * @returns {Column}
 */
const smallInteger = (name) => {
	return new Column(name, 'smallint')
}

module.exports = smallInteger
