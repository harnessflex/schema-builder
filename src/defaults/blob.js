const Column = require('../Column')

/**
 * Create a blob column.
 *
 * @param {string} name
 * @returns {Column}
 */
const blob = (name) => {
	return new Column(name, 'blob')
}

module.exports = blob
