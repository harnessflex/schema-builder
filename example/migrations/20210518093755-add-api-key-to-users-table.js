'use strict';

const { string, add } = require("../../src");

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
    dbm = options.dbmigrate;
    type = dbm.dataType;
    seed = seedLink;
};

exports.up = function (db) {
    return add(string('api_key').nullable().after('password'))
        .where('users')
        .using(db)
};

exports.down = function (db) {
    return db.removeColumn('users', 'api_key');
};

exports._meta = {
    "version": 1
};
