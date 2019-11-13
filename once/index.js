function once(fn) {
  let called = false;
  let ret;

  return function (...args) {
    if (!called) {
      ret = fn.apply(this, args);
      called = true;
    }
    return ret;
  }
}

module.exports = once;