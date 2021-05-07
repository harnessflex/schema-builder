const bigInteger = require('./defaults/bigInteger')
const binary = require('./defaults/binary')
const blob = require('./defaults/blob')
const boolean = require('./defaults/boolean')
const char = require('./defaults/char')
const date = require('./defaults/date')
const dateTime = require('./defaults/dateTime')
const decimal = require('./defaults/decimal')
const foreign = require('./defaults/foreign')
const id = require('./defaults/id')
const integer = require('./defaults/integer')
const longText = require('./defaults/longText')
const real = require('./defaults/real')
const smallInteger = require('./defaults/smallInteger')
const string = require('./defaults/string')
const text = require('./defaults/text')
const time = require('./defaults/time')
const timestamp = require('./defaults/timestamp')
const timestamps = require('./defaults/timestamps')

const Column = require('./Column')
const columns = require('./columns')
const ForeignColumn = require('./ForeignColumn')

module.exports = {
	bigInteger,
	binary,
	blob,
	boolean,
	char,
	Column,
	columns,
	date,
	dateTime,
	decimal,
	foreign,
	ForeignColumn,
	id,
	integer,
	longText,
	real,
	smallInteger,
	string,
	text,
	time,
	timestamp,
	timestamps,
}
