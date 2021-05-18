const ChangeColumn = require('./ChangeColumn')
const Column = require('./Column')
const ForeignColumn = require('./ForeignColumn')

/**
 * Add column.
 *
 * @param {Column|ForeignColumn} column
 * @returns {ChangeColumn}
 */
const add = (column) => {
    return new ChangeColumn(column, 'add')
}

module.exports = add
