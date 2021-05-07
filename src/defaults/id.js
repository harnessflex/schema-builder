const Column = require('../Column')

/**
 * Create an id column.
 *
 * @returns {Column}
 */
const id = () => {
	return new Column('id', 'int').primary().autoIncrement()
}

module.exports = id
