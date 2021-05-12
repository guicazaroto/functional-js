export const partialize = (fn, ...args) => fn.bind(null, ...args)

export const compose = (...fn) => value =>
  fn.reduceRight((lastFunc, func) => func(lastFunc), value)

export const pipe = (...fn) => value =>
  fn.reduce((lastFunc, func) => func(lastFunc), value)

export const takeUntil = (times, fn) =>
  () => (times-- > 0) && fn()

export const debounce = (time, fn) => {
  let timer = 0
  
  return () => {
    clearTimeout(timer)
    timer = setTimeout(fn, time)
  }
}