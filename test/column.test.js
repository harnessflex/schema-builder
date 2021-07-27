const { Column } = require('../src');

describe('Column', () => {

    /**
     * @type {Column}
     */
    let intColumn;

    beforeAll(async () => {
		intColumn = new Column('email', 'int');
	});

    test('Should return an object', (done) => {
        expect(intColumn.make()).toBeInstanceOf(Object);

        done();
    });

    test('Should return the correct definition', (done) => {
        const intColumn = new Column('email', 'int');

        const definition = {
            email: {
                notNull: true,
                type: "int",
                unsigned: true
            }
        }

        expect(intColumn.make()).toEqual(definition);

        done();
    });

    test('Should throw an error if name is not of type string', (done) => {
        expect(() => {
            new Column({})
        }).toThrow(TypeError);

        done();
    });

    test('Should throw an error if type is not of type string', (done) => {
        expect(() => {
            new Column('email', {})
        }).toThrow(TypeError);

        done();
    });

    test('Should throw an error if object definition is not of type object', (done) => {
        expect(() => {
            new Column('email', 'int', null)
        }).toThrow(TypeError);

        done();
    });

    test('Should return an instance of Column on after', (done) => {
        expect(intColumn.after('password')).toBeInstanceOf(Column);

        done();
    });

    test('Should return an instance of Column on length', (done) => {
        expect(intColumn.length(100)).toBeInstanceOf(Column);

        done();
    });

    test('Should return an instance of Column on primary', (done) => {
        expect(intColumn.primary(true)).toBeInstanceOf(Column);

        done();
    });

    test('Should return an instance of Column on autoIncrement', (done) => {
        expect(intColumn.autoIncrement(true)).toBeInstanceOf(Column);

        done();
    });

    test('Should return an instance of Column on nullable', (done) => {
        expect(intColumn.nullable(true)).toBeInstanceOf(Column);

        done();
    });

    test('Should return an instance of Column on unique', (done) => {
        expect(intColumn.unique(true)).toBeInstanceOf(Column);

        done();
    });

    test('Should return an instance of Column on unsigned', (done) => {
        expect(intColumn.unsigned(true)).toBeInstanceOf(Column);

        done();
    });

    test('Should return an instance of Column on default', (done) => {
        expect(intColumn.default(true)).toBeInstanceOf(Column);

        done();
    });

    test('Should throw an error if column is not of type string', (done) => {
        expect(() => {
            intColumn.after(null);
        }).toThrow(TypeError);

        done();
    });

    test('Should throw an error if length is not of type number', (done) => {
        expect(() => {
            intColumn.length(null);
        }).toThrow(TypeError);

        done();
    });

    test('Should throw an error if primary is not of type boolean', (done) => {
        expect(() => {
            intColumn.primary(null);
        }).toThrow(TypeError);

        done();
    });

    test('Should throw an error if autoIncrement is not of type boolean', (done) => {
        expect(() => {
            intColumn.autoIncrement(null);
        }).toThrow(TypeError);

        done();
    });

    test('Should throw an error if nullable is not of type boolean', (done) => {
        expect(() => {
            intColumn.nullable(null);
        }).toThrow(TypeError);

        done();
    });

    test('Should throw an error if unique is not of type boolean', (done) => {
        expect(() => {
            intColumn.unique(null);
        }).toThrow(TypeError);

        done();
    });

    test('Should throw an error if unsigned is not of type boolean', (done) => {
        expect(() => {
            intColumn.unsigned(null);
        }).toThrow(TypeError);

        done();
    });

});
