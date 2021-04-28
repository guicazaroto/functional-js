if(!Array.prototype.$flatMap) {
  Array.prototype.$flatMap = function (cb) {
    return this
      .map(cb)
      .reduce((newArr, next) => newArr.concat(next), [])
  }
}