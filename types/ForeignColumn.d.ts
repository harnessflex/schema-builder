export = ForeignColumn;
declare class ForeignColumn {
    constructor(column: any);
    column: any;
    /**
     * Reference column of another table.
     *
     * @param {string} column
     * @returns {ForeignColumn}
     */
    references(column?: string): ForeignColumn;
    /**
     * Reference table.
     *
     * @param {string} table
     * @returns {ForeignColumn}
     */
    on(table: string): ForeignColumn;
    /**
     * Add onDelete rule.
     *
     * @param {string} rule
     * @returns {ForeignColumn}
     */
    onDelete(rule: string): ForeignColumn;
    /**
     * Add onUpdate rule.
     *
     * @param {string} rule
     * @returns {ForeignColumn}
     */
    onUpdate(rule: string): ForeignColumn;
    /**
     * Get column object.
     *
     * @returns {object}
     */
    make(): object;
}
