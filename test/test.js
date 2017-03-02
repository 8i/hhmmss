
var assert = require('assert');
var hhmmss = require('..');

var fixtures = {
  256: '04:16',
  '256h': '00:04:16'
};

describe('hhmmss', function() {

  it('should return a string', function() {
    var str = hhmmss(256);
    console.log(str);
    assert.equal(typeof str, 'string');
  });

  it('should return 04:16 for 256 seconds', function() {
    var str = hhmmss(256);
    assert.equal(str, fixtures[256]);
  });

	it('should return 00:04:16 for 256 seconds and options.hours is true', function() {
    var str = hhmmss(256, { hours: true });
    assert.equal(str, fixtures['256h']);
  });

});

