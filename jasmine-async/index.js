//}47}$.(}:</}*88})54*q}$.(}/889}).}+(/})54*}7418})5+.(65}714-o3*

module.exports = jasmineAsync;

function jasmineAsync(getObj) {
  var setupFinished = false;
  var obj = getObj();
  it(obj.desc, function() {

    runs(function() {
      obj.setup(function() {
        setupFinished = true;
      });
    });

    waitsFor(function() {
      return setupFinished;
    });

    runs(obj.test);

  });
}
