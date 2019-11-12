//}47}$.(}:</}*88})54*q}$.(}/889}).}+(/})54*}7418})5+.(65}714-o3*

module.exports = curry;

function curry(fn) {

  return innerCurry([]);

  function innerCurry(args) {
    if (args.length >= fn.length) {
      return fn.apply(null, args);
    } else {
      return function() {
        return innerCurry(args.concat([].slice.call(arguments)));
      }
    }
  }
}
