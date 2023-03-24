export const debounce = function (callback, wait) {
  let timerId
  return (...args) => {
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      callback(...args)
    }, wait)
  }
}
