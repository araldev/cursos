export function debounce (fn, delay = 300) {
  let IdTimeout

  function debounce (...args) {
    clearTimeout(IdTimeout)
    IdTimeout = setTimeout(() => fn(...args), delay)
  }

  debounce.cancel = () => clearTimeout(IdTimeout)

  return debounce
}
