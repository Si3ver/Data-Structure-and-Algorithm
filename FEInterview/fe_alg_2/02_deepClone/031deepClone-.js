// 参考 23 题，这个实现不如那个
var clone = function(v) {
  var o = v.constructor === Array ? [] : {};
  for (var i in v) {
    o[i] = typeof v[i] === "Object" ? clone(v[i]) : v[i];
  }
  return o;
}
