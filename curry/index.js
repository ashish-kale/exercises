function curry(fn) {
  return function curried() {
    let args = [].slice.call(arguments);
    if (args.length === fn.length)
      return fn.apply(this, args);
    else {
      return function () {
        let args2 = [].slice.call(arguments);
        return curried.apply(this, args.concat(args2));
      }
    }
  };

}

module.exports = curry;