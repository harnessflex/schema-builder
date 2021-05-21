const add = require('./add')
const bigIncrements = require('./defaults/bigIncrements')
const bigInteger = require('./defaults/bigInteger')
const binary = require('./defaults/binary')
const blob = require('./defaults/blob')
const boolean = require('./defaults/boolean')
const change = require('./change')
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
const softDeletes = require('./defaults/softDeletes')
const string = require('./defaults/string')
const text = require('./defaults/text')
const time = require('./defaults/time')
const timestamp = require('./defaults/timestamp')
const timestamps = require('./defaults/timestamps')

const ChangeColumn = require('./ChangeColumn')
const Column = require('./Column')
const columns = require('./columns')
const ForeignColumn = require('./ForeignColumn')
const schema = require('./schema')

module.exports = {
    add,
    bigIncrements,
	bigInteger,
	binary,
	blob,
	boolean,
    change,
    ChangeColumn,
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
    schema,
	smallInteger,
    softDeletes,
	string,
	text,
	time,
	timestamp,
	timestamps,
}
