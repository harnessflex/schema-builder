export = foreign;
/**
 * Create a foreign key.
 *
 * @param {string} name
 * @returns {ForeignColumn}
 */
declare function foreign(name: string): ForeignColumn;
import ForeignColumn = require("../ForeignColumn");
