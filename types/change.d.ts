export = change;
/**
 * Change column.
 *
 * @param {Column|ForeignColumn} column
 * @returns {ChangeColumn}
 */
declare function change(column: Column | ForeignColumn): ChangeColumn;
import Column = require("./Column");
import ForeignColumn = require("./ForeignColumn");
import ChangeColumn = require("./ChangeColumn");
