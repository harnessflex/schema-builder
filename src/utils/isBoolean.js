/**
 * @return {Boolean}
 */
 const isBoolean = (object) => {
	return object !== undefined && object !== null && object.constructor == Boolean;
};

module.exports = isBoolean;
