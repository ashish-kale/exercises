//}47}$.(}:</}*88})54*q}$.(}/889}).}+(/})54*}7418})5+.(65}714-o3*

module.exports = flatten;

function flatten(arr) {
  var ret = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      ret.push.apply(ret, flatten(arr[i]));
    } else {
      ret.push(arr[i]);
    }
  }
  return ret;
}
