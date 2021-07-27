/**
 * @return {Boolean}
 */
 const isNumber = (object) => {
	return object !== undefined && object !== null && object.constructor == Number;
};

module.exports = isNumber;
