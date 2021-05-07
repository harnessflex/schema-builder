const Column = require('./Column')
const ForeignColumn = require('./ForeignColumn')

/**
 * Get all columns.
 *
 * @param {Column[]} all
 * @returns {object} results
 */
const columns = (all, results = {}) => {
	if (!Array.isArray(all)) {
		throw new Error('Columns list not valid.')
	}

	all.forEach((column) => {
		Object.assign(results, column instanceof Column || column instanceof ForeignColumn ? column.make() : column)
	})

	return results
}

module.exports = columns
