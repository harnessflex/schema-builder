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

Schema Builder works on both `JavaScript` based projects and `imba` based projects.

### JavaScript

```js
const { columns, id, foreign, string, longText, timestamps, softDeletes, timestamp } = require('@harnessflex/schema-builder')

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
    ])
}
```

### Imba


```js
const { columns, id, foreign, string, longText, timestamps, softDeletes, timestamp } = require '@harnessflex/schema-builder'

exports.up = do(db)
    db.createTable 'posts', columns [
        id!
        foreign('user_id').references('id').on('users').onDelete 'cascade'
        string 'title'
        longText 'body'
        string('slug').unique!
        timestamp('published_at').nullable!
        softDeletes!
        timestamps!
    ]
```

Modifying Tables
----------------

To add a new `column` to an existing table, use the `add` helper method:

```js
const { string, add } = require('@harnessflex/schema-builder')

...

exports.up = function (db) {
    return add( string('api_key').nullable().after('password') )
        .whereTable('users')
        .using(db)
};
```

And to change a column in an existing table, use the `change` helper method:

```js
const { change, longText } = require('@harnessflex/schema-builder')

...

exports.up = function (db) {
    return change( longText('api_key').nullable() )
        .whereTable('users')
        .using(db)
};
```

> Both, the `add` and `change` methods, return a `ChangeColumn` instance.

Columns
-------

Column          | Params                      | Type            | Unique Constraint Support
:---------------|:----------------------------|-----------------|:--------------------
`bigIncrements` | `name: string`              | `Column`        | &#9745;
`bigInteger`    | `name: string`              | `Column`        | &#9745;
`binary`        | `name: string`              | `Column`        | &#9745;
`blob`          | `name: string`              | `Column`        | &#9744;
`boolean`       | `name: string`              | `Column`        | &#9745;
`char`          | `name: string`              | `Column`        | &#9745;
`date`          | `name: string`              | `Column`        | &#9745;
`dateTime`      | `name: string`              | `Column`        | &#9745;
`decimal`       | `name: string`              | `Column`        | &#9745;
`foreign`       | `name: string`              | `ForeignColumn` | &#9744;
`id`            |                             | `Column`        | &#9745;
`integer`       | `name: string`              | `Column`        | &#9745;
`longText`      | `name: string`              | `Column`        | &#9744;
`real`          | `name: string`              | `Column`        | &#9745;
`smallInteger`  | `name: string`              | `Column`        | &#9745;
`softDeletes`   |                             | `Column`        | &#9745;
`string`        | `name: string`              | `Column`        | &#9745;
`text`          | `name: string`              | `Column`        | &#9744;
`time`          | `name: string`              | `Column`        | &#9745;
`timestamp`     | `name: string`              | `Column`        | &#9745;
`timestamps`    | `currentTimeStamp: boolean` | `object`        | &#9745;

<br/>

Other
-----
Method    | Params                            | Description
:---------|:----------------------------------|:-----------------------------
`add`     | `column: Column or ForeignColumn` | Add a new column to an existing table.
`change`  | `column: Column or ForeignColumn` | Change a column in an existing table.
`columns` | `columns: array`                  | A collection of columns.
`schema`  | `columns: array`                  | A collection of columns.

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

JavaScript and Imba

```js
foreign('user_id').references('id').on('users').onDelete('cascade')
```

### Column

 Method         | Params                | Description
:---------------|:----------------------|:-----------------------------
`after`         | `column: string`      | Add column after another column.
`length`        | `length: integer`     | Set column length.
`primary`       | `primary: boolean`    | Set column as primary key.
`autoIncrement` | `increment: boolean`  | Add auto increment attribute.
`nullable`      | `nullable: boolean`   | Mark column nullable.
`unique`        | `isUnique: boolean`   | Mark column unique.
`unsigned`      | `isUnsigned: boolean` | Mark column unsigned.
`default`       | `value: mixed`        | Set column default value.

<br/>

#### JavaScript

```js
return db.createTable('users', columns([
	id(),
	string('name'),
	string('email').unique(),
	string('password'),
	timestamp('email_verified_at').nullable(),
	timetamps(),
]))
```

#### Imba 

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

### ChangeColumn

 Method         | Params                | Description
:---------------|:----------------------|:-----------------------------
`where`         | `table: string`       | Set table name.
`whereTable`    | `table: string`       | Set table name.
`using`         | `db: object`          | Add/change column and return db-migrate db instance.

<br/>

#### JavaScript

```js
return change( longText('api_key').nullable() )
    .whereTable('users')
    .using(db)
```

#### Imba

```js
change( longText('api_key').nullable! )
    .whereTable('users')
    .using db
```

Example (JavaScript)
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
