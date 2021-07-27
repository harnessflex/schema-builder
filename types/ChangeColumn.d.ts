export = ChangeColumn;
declare class ChangeColumn {
    /**
     * @param {Column|ForeignColumn} column
     * @param {string} type
     * @throws {Error}
     * @throws {TypeError}
     */
    constructor(column: Column | ForeignColumn, type: string);
    column: Column | ForeignColumn;
    type: string;
    /**
     * Set table name.
     *
     * @param {string} table table name
     * @throws {TypeError}
     * @returns {ChangeColumn}
     */
    whereTable(table: string): ChangeColumn;
    table: string;
    /**
     * Set table name.
     *
     * @param {string} table
     * @throws {TypeError}
     * @returns {ChangeColumn}
     */
    where(table: string): ChangeColumn;
    /**
     * Add/change column and return db-migrate db instance.
     *
     * @param {object} db
     */
    using(db: object): any;
}
import Column = require("./Column");
import ForeignColumn = require("./ForeignColumn");
