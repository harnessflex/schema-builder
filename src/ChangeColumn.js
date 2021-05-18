const Column = require('./Column')
const ForeignColumn = require('./ForeignColumn')

class ChangeColumn {
    /**
     * @param {Column|ForeignColumn} column
     * @param {string} type
     */
    constructor(column, type) {
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
     * @returns {ChangeColumn}
     */
    whereTable(table) {
        this.table = table

        return this
    }

    /**
     * Set table name.
     *
     * @param {string} table
     * @returns {ChangeColumn}
     */
    where(table) {
        return this.whereTable(table)
    }

    /**
     * Add column and return db-migrate db instance.
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
