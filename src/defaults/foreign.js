const Column = require('../Column')
const ForeignColumn = require('../ForeignColumn')

/**
 * Create a foreign key.
 *
 * @param {string} name
 * @returns {ForeignColumn}
 */
const foreign = (name) => {
	const foreignColumn = new Column(name, 'int', {
		foreignKey: {
			name: null,
			table: null,
			rules: {
				onDelete: 'RESTRICT',
				onUpdate: 'RESTRICT'
			},
			mapping: 'id'
		}
	}).unsigned()

	return new ForeignColumn(foreignColumn)
}

module.exports = foreign
