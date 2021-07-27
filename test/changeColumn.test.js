const { ChangeColumn, Column } = require('../src');

describe('ChangeColumn', () => {

    /**
     * @type {Column}
     */
    let intColumn;

    /**
     * @type {ChangeColumn}
     */
    let changeColumn;

    beforeAll(() => {
        intColumn = new Column('email', 'int');

        changeColumn = new ChangeColumn(intColumn, 'add');
    });

    test('Should throw an error if column is not an instance of Column or ForeignColumn', (done) => {
        expect(() => {
            new ChangeColumn({}, 'add');
        }).toThrow(TypeError);

        done();
    });

    test('Should throw an error if type is not of type string', (done) => {
        expect(() => {
            new ChangeColumn(intColumn, null);
        }).toThrow(TypeError);

        done();
    });

    test('Should throw an error if type is not "add" or "change"', (done) => {
        expect(() => {
            new ChangeColumn(intColumn, 'hello');
        }).toThrow(Error);

        done();
    });

    test('Should throw an error if type is not "add" or "change"', (done) => {
        expect(() => {
            new ChangeColumn(intColumn, 'hello');
        }).toThrow(Error);

        done();
    });

    test('Should throw an error if table is not of type string on whereTable', (done) => {
        expect(() => {
            changeColumn.whereTable(null);
        }).toThrow(TypeError);

        done();
    });

    test('Should throw an error if table is not of type string on where', (done) => {
        expect(() => {
            changeColumn.whereTable(null);
        }).toThrow(TypeError);

        done();
    });

    test('Should return an instance of ChangeColumn on whereTable', (done) => {
        expect(changeColumn.whereTable('users')).toBeInstanceOf(ChangeColumn);

        done();
    });

    test('Should return an instance of ChangeColumn on where', (done) => {
        expect(changeColumn.where('users')).toBeInstanceOf(ChangeColumn);

        done();
    });

});
