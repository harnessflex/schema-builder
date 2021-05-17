class ForeignColumn {
	constructor(column) {
		column.object = Object.assign(column.object, {
			foreignKey: {
				name: null,
				table: null,
				rules: {
					onDelete: 'RESTRICT',
					onUpdate: 'RESTRICT'
				},
				mapping: 'id'
			}
		})

		this.column = column
	}

	/**
	 * Reference column of another table.
	 *
	 * @param {string} column
	 * @returns {ForeignColumn}
	 */
	references(column = 'id') {
		this.column.object.foreignKey.mapping = {
			[this.column.name]: column
		}

		return this
	}

	/**
	 * Reference table.
	 *
	 * @param {string} table
	 * @returns {ForeignColumn}
	 */
	on(table) {
		this.column.object.foreignKey.table = table

		return this
	}

	/**
	 * Add onDelete rule.
	 *
	 * @param {string} rule
	 * @returns {ForeignColumn}
	 */
	onDelete(rule) {
		this.column.object.foreignKey.rules.onDelete = rule.toUpperCase()

		return this
	}

	/**
	 * Add onUpdate rule.
	 *
	 * @param {string} rule
	 * @returns {ForeignColumn}
	 */
	onUpdate(rule) {
		this.column.object.foreignKey.rules.onUpdate = rule.toUpperCase()

		return this
	}

	/**
	 * Get column object.
	 *
	 * @returns {object}
	 */
	make() {
		const tableName = this.column.object.foreignKey.table
		const columnName = this.column.name

		if (!tableName) {
			throw new Error('Foreign key table name is not set.')
		}

		this.column.object.foreignKey.name = `${tableName}_${columnName}_fk`

		return {
			[this.column.name]: this.column.object
		}
	}
}

module.exports = ForeignColumn
