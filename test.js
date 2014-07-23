var assert = require('assert');
var CSScomb = require('csscomb');
var groupSize = require('./group-size');

var csscomb = new CSScomb().use(groupSize);

describe('Group size', function() {
    it('1', function() {
        csscomb.configure({'group-size': 1});
        var css = 'a {\n  color: tomato;\n  \n  top: 0;\n  \n  height: 0;\n}';
        var result = csscomb.processString(css);
        assert.equal(result, css);
    });
    it('2', function() {
        csscomb.configure({'group-size': 2});
        var css = 'a {\n  color: tomato;\n  \n  top: 0;\n  \n  height: 0;\n}';
        var expected = 'a {\n  color: tomato;\n  top: 0;\n  height: 0;\n}';
        var result = csscomb.processString(css);
        assert.equal(result, expected);
    });
    it('3', function() {
        csscomb.configure({'group-size': 2});
        var css = 'a {\n  color: tomato;\n  \n  top: 0;\n  height: 0;\n}';
        var expected = 'a {\n  color: tomato;\n  \n  top: 0;\n  height: 0;\n}';
        var result = csscomb.processString(css);
        assert.equal(result, expected);
    });
});
