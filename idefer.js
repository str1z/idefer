function idefer(i) {
  let q = [];
  let deferred = function () {
    for (let fn of q) fn();
    q = [];
  };
  for (let key in i)
    if (typeof i[key] == "function")
      deferred[key] = (...args) => {
        q.push(() => i[key](...args));
        return deferred;
      };
  return deferred;
}

if (typeof module != "undefined") module.exports = idefer;
