/**
 * @return {Boolean}
 */
const isString = (object) => {
	return object !== undefined && object !== null && object.constructor == String;
};

module.exports = isString;
