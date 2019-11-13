
function map(context, fn, t) {
  let ret = [];
  let i = 0;
  context.forEach(function(element) {
    ret.push(fn.call(t, element, i, context));
    i++;
  });
  return ret;
}

module.exports = map;