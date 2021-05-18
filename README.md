# Schema Builder

A Laravel inspired schema builder for Harness Flex and DB Migrate.

Install
-------

This package is automatically installed with the Harness Flex Framework.

```
npm i @harnessflex/schema-builder
```

Basic Usage
-----------

Schema Builder works on both `imba` based projects and `JavaScript` based projects.

### Harness Flex


```js
const { columns, foreign, id, longText, string, timestamps } = require '@harnessflex/schema-builder'

exports.up = do(db, callback)
	db.createTable 'blogs', columns [
		id!
		foreign('user_id').references('id').on('users').onDelete 'cascade'
		foreign('category_id').references('id').on 'categories'
		longText 'body'
		string('tags').nullable!
		timestamps!
	], callback
```

### JavaScript

```js
const { columns, foreign, id, longText, string, timestamps } = require('@harnessflex/schema-builder')

exports.up = function (db, callback) {
	db.createTable('blogs', columns([
		id(),
		foreign('user_id').references('id').on('users').onDelete('cascade'),
		foreign('category_id').references('id').on('categories'),
		longText('body'),
		string('tags').nullable(),
		timestamps(),
	], callback)
}
```

Columns
-------

Column         | Params                      | Type            | Unique Constraint Support
:--------------|:----------------------------|-----------------|:--------------------
`bigInteger`   | `name: string`              | `Column`        | - [x] 
`binary`       | `name: string`              | `Column`        | - [x] 
`blob`         | `name: string`              | `Column`        | - [ ] 
`boolean`      | `name: string`              | `Column`        | - [x] 
`char`         | `name: string`              | `Column`        | - [x] 
`date`         | `name: string`              | `Column`        | - [x] 
`dateTime`     | `name: string`              | `Column`        | - [x] 
`decimal`      | `name: string`              | `Column`        | - [x] 
`foreign`      | `name: string`              | `ForeignColumn` | - [x] 
`id`           |                             | `Column`        | - [x] 
`integer`      | `name: string`              | `Column`        | - [x] 
`longText`     | `name: string`              | `Column`        | - [ ] 
`real`         | `name: string`              | `Column`        | - [x] 
`smallInteger` | `name: string`              | `Column`        | - [x] 
`softDeletes`  |                             | `Column`        | - [x] 
`string`       | `name: string`              | `Column`        | - [x] 
`text`         | `name: string`              | `Column`        | - [ ] 
`time`         | `name: string`              | `Column`        | - [x] 
`timestamp`    | `name: string`              | `Column`        | - [x] 
`timestamps`   | `currentTimeStamp: boolean` | `Object`        | - [x] 

<br/>

Other
-----
Method    | Params           | Description
:---------|:-----------------|:-----------------------------
`columns` | `columns: array` | A collection of columns.

<br/>

API
---

<br/>

### ForeignColumn

 Method      | Params           | Description
:------------|:-----------------|:----------------------------------
`references` | `column: string` | Reference column of another table.
`on`         | `table: string`  | Reference table.
`onDelete`   | `rule: string`   | Add onDelete rule.
`onUpdate`   | `rule: string`   | Add onUpdate rule.

<br/>

Imba and JavaScript

```js
foreign('user_id').references('id').on('users').onDelete('cascade')
```

### Column

 Method         | Params                | Description
:---------------|:----------------------|:-----------------------------
`length`        | `length: integer`     | Set column length.
`primary`       | `primary: boolean`    | Set column as primary key.
`autoIncrement` | `increment: boolean`  | Add auto increment attribute.
`nullable`      | `nullable: boolean`   | Mark column nullable.
`unique`        | `isUnique: boolean`   | Mark column unique.
`unsigned`      | `isUnsigned: boolean` | Mark column unsigned.
`default`       | `value: mixed`        | Set column default value.

<br/>

Imba 

```js
db.createTable 'users', columns [
	id!
	string 'name'
	string('email').unique!
	string 'password'
	timestamp('email_verified_at').nullable!
	timetamps!
]
```

JavaScript

```js
db.createTable('users', columns([
	id(),
	string('name'),
	string('email').unique(),
	string('password'),
	timestamp('email_verified_at').nullable(),
	timetamps(),
]))
```

Example
-------

Before running the example project, edit the `database.json` config file located under the `example` folder.

When done, run the following command:

```bash
db-migrate up -m=example/migrations
```

This command will create 2 new tables named `users` and `posts` in your database.


> Note: `db-migrate` and `db-migrate-mysql` must be installed globally.

Security
-------

If you discover any security related issues, please email donaldpakkies@gmail.com instead of using the issue tracker.

License
-------

The MIT License (MIT). Please see [License File](LICENSE) for more information.
