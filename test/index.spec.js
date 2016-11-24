'use strict';

const chai = require('chai');
const should = chai.should();
const jsonToQString = require('../index');


describe('Util test', () => {
    it('return empty string for empty json object', () => {
            let qString = jsonToQString({});
            qString.should.eqls('');
        }
    );
    it('return string with key value for object with one param', () => {
            let qString = jsonToQString({key: 'value'});
            qString.should.eqls('key=value');
        }
    );
    it('return string with key value for object with three params', () => {
            let qString = jsonToQString({key: 'value', name: 'mono', last_family: 'yoyo'});
            qString.should.eqls('key=value&name=mono&last_family=yoyo');
        }
    );
    it('return string with key value for object with special keys', () => {
            let qString = jsonToQString({'?key': 'value', name: 'mono', last_family: 'yoyo'});
            qString.should.eqls('%3Fkey=value&name=mono&last_family=yoyo');
        }
    );
    it('return string with key value for object with special values', () => {
            let qString = jsonToQString({'key': 'value@', name: '=mono', last_family: 'yoyo'});
            qString.should.eqls('key=value%40&name=%3Dmono&last_family=yoyo');
        }
    );
})
