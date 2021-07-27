const isBoolean = require('./utils/isBoolean');
const isNumber = require('./utils/isNumber');
const isObject = require('./utils/isObject');
const isString = require('./utils/isString');
class Column {
	constructor(name, type, object = {}) {
        if (!isString(name)) {
            throw new TypeError('name must be string');
        }

        if (!isString(type)) {
            throw new TypeError('type must be string');
        }

        if (!isObject(object)) {
            throw new TypeError('object must be object');
        }

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
        if (!isString(column)) {
            throw new TypeError('column must be string');
        }

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
		if (!isNumber(length)) {
			throw new TypeError(`${length} is not a valid number`)
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
        if (!isBoolean(primary)) {
            throw new TypeError('primary must be boolean');
        }

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
        if (!isBoolean(increment)) {
            throw new TypeError('increment must be boolean');
        }

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
        if (!isBoolean(nullable)) {
            throw new TypeError('nullable must be boolean');
        }

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
        if (!isBoolean(isUnique)) {
            throw new TypeError('isUnique must be boolean');
        }

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
        if (!isBoolean(isUnsigned)) {
            throw new TypeError('isUnsigned must be boolean');
        }

		this.object.unsigned = isUnsigned

		return this
	}

	/**
	 * Set column default value.
	 *
	 * @param {Number|string|boolean} value
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
