const Column = require('../Column')

/**
 * Create created_at and updated_at columns.
 *
 * @param {Boolean} currentTimeStamp
 * @returns {object}
 */
const timestamps = (currentTimeStamp = true) => {
	const createdAt = new Column('created_at', 'timestamp')
	const updatedAt = new Column('updated_at', 'timestamp')

	if (currentTimeStamp) {
		createdAt.default(new String('CURRENT_TIMESTAMP'))
		updatedAt.default(new String('CURRENT_TIMESTAMP'))
	}

	return Object.assign(createdAt.make(), updatedAt.make())
}

module.exports = timestamps
