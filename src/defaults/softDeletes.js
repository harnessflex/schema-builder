const Column = require('../Column')

/**
 * Create a deleted_at column.
 *
 * @returns {Column}
 */
const softDeletes = () => {
	return new Column('deleted_at', 'timestamp').nullable()
}

module.exports = softDeletes
