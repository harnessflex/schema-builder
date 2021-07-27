/**
 * @return {Boolean}
 */
const isObject = (object) => {
	return object !== undefined && object !== null && object.constructor == Object;
};

module.exports = isObject;
