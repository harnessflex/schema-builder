const isString = require('./utils/isString');
const Column = require('./Column')
const ForeignColumn = require('./ForeignColumn')

class ChangeColumn {
    /**
     * @param {Column|ForeignColumn} column
     * @param {string} type
     * @throws {Error}
     * @throws {TypeError}
     */
    constructor(column, type) {
        if (!(column instanceof Column || column instanceof ForeignColumn)) {
            throw new TypeError('column must be an instance of Column or ForeignColumn');
        }

        if (!isString(type)) {
            throw new TypeError('type must be a string');
        }

        if (!['add', 'change'].includes(type)) {
            throw new Error("Invalid change type.")
        }

        this.column = column
        this.type = type
    }

    /**
     * Set table name.
     *
     * @param {string} table table name
     * @throws {TypeError}
     * @returns {ChangeColumn}
     */
    whereTable(table) {
        if (!isString(table)) {
            throw new TypeError('table must be a string');
        }

        this.table = table

        return this
    }

    /**
     * Set table name.
     *
     * @param {string} table
     * @throws {TypeError}
     * @returns {ChangeColumn}
     */
    where(table) {
        if (!isString(table)) {
            throw new TypeError('table must be a string');
        }

        return this.whereTable(table)
    }

    /**
     * Add/change column and return db-migrate db instance.
     *
     * @param {object} db
     */
    using(db) {
        const name = this.column.name
        const spec = this.column.make()[name]

        if (this.type === 'add') {
            return db.addColumn(this.table, name, spec)
        }

        return db.changeColumn(this.table, name, spec)
    }
}

module.exports = ChangeColumn
