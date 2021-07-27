const Column = require("../Column")
const bigInteger = require("./bigInteger")

/**
 * Add auto incrementing big integer.
 *
 * @param {string} name
 * @returns {Column}
 */
const bigIncrements = (name) => {
    return bigInteger(name).primary().autoIncrement()
}

module.exports = bigIncrements
