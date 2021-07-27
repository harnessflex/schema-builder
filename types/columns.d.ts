export = columns;
/**
 * Get all columns.
 *
 * @param {Column[]|ForeignColumn[]} all
 * @returns {object} results
 */
declare function columns(all: Column[] | ForeignColumn[], results?: {}): object;
import Column = require("./Column");
import ForeignColumn = require("./ForeignColumn");
