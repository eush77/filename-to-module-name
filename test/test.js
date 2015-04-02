'use strict';

var moduleName = require('..');

var test = require('tape');

var path = require('path');


test(function (t) {
  var fixture = path.join.bind(null, __dirname + '/fixtures');
  var m = function (filename) {
    return moduleName(fixture(filename));
  };

  t.equal(m('foo.js'), 'foo.js');
  t.equal(m('foo.json'), 'foo.json');
  t.equal(m('foo'), 'foo');
  t.equal(m('foo/bar.js'), 'bar');
  t.equal(m('foo/quux'), 'quux');
  t.equal(m('foo/quux/quux.json'), 'quux');
  t.equal(m('foo/quux/quux.node'), 'quux.node');

  t.end();
});
