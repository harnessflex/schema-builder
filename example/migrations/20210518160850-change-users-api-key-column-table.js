'use strict';

const { change, longText, string } = require("../../src");

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
    return change(longText('api_key').nullable())
        .where('users')
        .using(db)
};

exports.down = function (db) {
    return change(string('api_key').nullable())
        .where('users')
        .using(db)
};

exports._meta = {
    "version": 1
};
