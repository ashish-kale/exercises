function flattenThunk(initFn) {
  return function (cb) {
    const processReturn = (err, result) => {
      if (typeof result === 'function')
        result(processReturn);
      else
        cb(null, result);
    }
    initFn(processReturn);
  }
}

module.exports = flattenThunk;