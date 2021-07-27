export = softDeletes;
/**
 * Create a deleted_at column.
 *
 * @returns {Column}
 */
declare function softDeletes(): Column;
import Column = require("../Column");
