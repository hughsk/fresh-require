var test  = require('tape')
var fresh = require('../')

var copies = {
    a: fresh('./random', require)
  , b: fresh('./random', require)
  , c: fresh('./another', require)
  , d: fresh('./another', require)
}

var original = {
    a: require('./random')
  , b: require('./random')
  , c: require('./another')
  , d: require('./another')
}

test('fresh-require', function(t) {
  t.equal(original.a, original.b)
  t.equal(original.c, original.d)
  t.notEqual(copies.a, copies.b)
  t.notEqual(copies.c, copies.d)
  t.end()
})

if (process.browser) test('shutdown', function(t) {
  t.end()
  setTimeout(function() {
    window.close()
  })
})
