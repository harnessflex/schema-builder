export = schema;
/**
 * Get all columns.
 *
 * @param {Column[]|ForeignColumn[]} all
 * @returns {object}
 */
declare function schema(all: Column[] | ForeignColumn[]): object;
import Column = require("./Column");
import ForeignColumn = require("./ForeignColumn");
