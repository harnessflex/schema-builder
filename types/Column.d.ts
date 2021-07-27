export = Column;
declare class Column {
    constructor(name: any, type: any, object?: {});
    name: any;
    object: {};
    /**
     * Add column after another column.
     *
     * @param {string} column column name
     * @returns {Column}
     */
    after(column: string): Column;
    /**
     * Set column length.
     *
     * @param {Number} length
     * @returns {Column}
     */
    length(length: number): Column;
    /**
     * Set column as primary key.
     *
     * @param {boolean} primary
     * @returns {Column}
     */
    primary(primary?: boolean): Column;
    /**
     * Add auto increment attribute.
     *
     * @param {boolean} increment
     * @returns {Column}
     */
    autoIncrement(increment?: boolean): Column;
    /**
     * Mark column nullable.
     *
     * @param {boolean} nullable
     * @returns {Column}
     */
    nullable(nullable?: boolean): Column;
    /**
     * Mark column unique.
     *
     * @param {boolean} isUnique
     * @returns {Column}
     */
    unique(isUnique?: boolean): Column;
    /**
     * Mark column as unsigned.
     *
     * @param {boolean} isUnsigned
     * @returns {Column}
     */
    unsigned(isUnsigned?: boolean): Column;
    /**
     * Set column default value.
     *
     * @param {Number|string|boolean} value
     * @returns {Column}
     */
    default(value: number | string | boolean): Column;
    /**
     * Get column object.
     *
     * @returns {object}
     */
    make(): object;
}
