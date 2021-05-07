const Column = require('../Column')

/**
 * Create a bigint column.
 *
 * @param {string} name
 * @returns {Column}
 */
const bigInteger = (name) => {
	return new Column(name, 'bigint')
}

module.exports = bigInteger
