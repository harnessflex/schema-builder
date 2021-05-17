'use strict';

const {
    columns,
    id,
    foreign,
    string,
    longText,
    boolean,
    timestamps,
    softDeletes,
    timestamp
} = require("../../src");

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
    return db.createTable('posts', columns([
        id(),
        foreign('user_id').references('id').on('users').onDelete('cascade'),
        string('title'),
        longText('body'),
        string('slug').unique(),
        timestamp('published_at').nullable(),
        softDeletes(),
        timestamps(),
    ]));
};

exports.down = function (db) {
    return db.dropTable('posts');
};

exports._meta = {
    "version": 1
};
