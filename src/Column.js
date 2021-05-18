class Column {
	constructor(name, type, object = {}) {
		this.name = name

		let def = {
			type: type,
			notNull: true
		}

		if (type === 'int') {
			def = {
				type: type,
				unsigned: true,
				notNull: true
			}
		}

		object = Object.assign(def, object)

		this.object = object
	}

    /**
     * Add column after another column.
     *
     * @param {string} column column name
     * @returns {Column}
     */
    after(column) {
        this.object.after = column

        return this
    }

	/**
	 * Set column length.
	 *
	 * @param {Number} length
	 * @returns {Column}
	 */
	length(length) {
		if (!Number.isInteger(length)) {
			throw new Error(`${length} is invalid.`)
		}

		this.object.length = length

		return this
	}

	/**
	 * Set column as primary key.
	 *
	 * @param {boolean} primary
	 * @returns {Column}
	 */
	primary(primary = true) {
		this.object.primaryKey = primary

		return this
	}

	/**
	 * Add auto increment attribute.
	 *
	 * @param {boolean} increment
	 * @returns {Column}
	 */
	autoIncrement(increment = true) {
		this.object.autoIncrement = increment

		return this
	}

	/**
	 * Mark column nullable.
	 *
	 * @param {boolean} nullable
	 * @returns {Column}
	 */
	nullable(nullable = false) {
		this.object.notNull = nullable

		return this
	}

	/**
	 * Mark column unique.
	 *
	 * @param {boolean} isUnique
	 * @returns {Column}
	 */
	unique(isUnique = true) {
		this.object.unique = isUnique

		return this
	}

	/**
	 * Mark column as unsigned.
	 *
	 * @param {boolean} isUnsigned
	 * @returns {Column}
	 */
	unsigned(isUnsigned = true) {
		this.object.unsigned = isUnsigned

		return this
	}

	/**
	 * Set column default value.
	 *
	 * @param {Number|string} value
	 * @returns {Column}
	 */
	default(value) {
		this.object.defaultValue = value

		return this
	}

	/**
	 * Get column object.
	 *
	 * @returns {object}
	 */
	make() {
		return {
			[this.name]: this.object
		}
	}
}

module.exports = Column
