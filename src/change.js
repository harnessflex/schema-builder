const ChangeColumn = require('./ChangeColumn')
const Column = require('./Column')
const ForeignColumn = require('./ForeignColumn')

/**
 * Change column.
 *
 * @param {Column|ForeignColumn} column
 * @returns {ChangeColumn}
 */
const change = (column) => {
    return new ChangeColumn(column, 'change')
}

module.exports = change
