var sources = arguments[4]
var cache   = arguments[5]

module.exports = fresh

function fresh(target, newRequire) {
  var name = newRequire.arguments[0]
  var map  = sources[name][1]
  if (!map[target]) return null

  var mod = { exports: {} }
  var _id = map[target]

  sources[_id][0].call(mod.exports, function(x){
    var id = sources[name][1][x]
    var ex = cache[id] && cache[id].exports
    return ex || newRequire(id)
  }, mod, mod.exports)

  return mod.exports
}
